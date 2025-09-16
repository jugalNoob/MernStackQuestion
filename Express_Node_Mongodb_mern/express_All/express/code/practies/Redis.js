//Q what is in memory datastore ?

//Ans: store in Ram 

//https://redis.io/learn/develop/node/gettingstarted

//https://redis.io/learn/develop/node/node-crash-course


///docker pull redis/redis-stack:latest


 
///docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest


//// :::::::::::::: --------------- > simple code redis  ::::::::::::

const redis = require('redis');
const express = require('express');
//const fetch = require('node-fetch'); // Ensure you have the node-fetch package

const app = express();
const port = process.env.PORT || 9000;

// Create Redis client to connect to the server
let redisClient;

(async () => {
  redisClient = redis.createClient();
  
  redisClient.on('error', (error) => {
    console.error(`Redis connection error: ${error}`);
  });

  let coonected=await redisClient.connect();

  if(coonected){
    console.log('Connected to Redis');
  }else{
    console.log('Failed to connect to Redis');
  }
})();

app.get('/', async (req, res) => {
  // Fetch data from the external API without caching
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});



app.get('/api', async (req, res) => {
    try {
      // Check if data is in the Redis cache
      const isExist = await redisClient.exists('apiget');
  
      if (isExist) {
        console.log('Data exists in cache');
        console.log("get from cache")

        const cachedData = await redisClient.get('apiget');
        return res.send(JSON.parse(cachedData));

      }
  
     
      console.log('Cache miss - fetching data from external API');
  
      // If data is not in cache, fetch it from the external API
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  
      // Check if the fetch was successful
      if (!response.ok) {
        console.error('Failed to fetch data from external API:', response.status, response.statusText);
        return res.status(response.status).send(`Error fetching data from external API: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Store the data in Redis with a TTL (e.g., 3600 seconds = 1 hour)
      await redisClient.set('apiget', JSON.stringify(data), { EX: 3600 });
  
      // Send the data to the client
      res.send(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
  });


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});




// create a rate limit wit logic  with readis :::::::::::::




app.get("/" , async(req,res)=>{
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const requestCount = await redisClient.incr(`${clientIp}:request_count`);

  console.log(requestCount)

  if(requestCount > 5){
    return res.status(429).send("Too many requests" + requestCount);
  }

  res.send({ message: "Hello, world!", clientIp, request_count: requestCount });


})