/// simple rate time  function 

let count = 0;

app.get("/about", (req, res) => {
  // Retrieve the client's IP address
  const clientip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  
  // Increment the count
  count++;

let time=20 //wait 20 seconds 
  if(time  == 1){

  }


  // Check rate limit
  if(count > 5){
    return res.status(429).send(Too many requests. Please try again later. ${time} );
  }

  // Log the client IP and count
  console.log(clientip, count);

  // Send the IP and count as a JSON object
  res.send({ clientip, count });
});




//create a rate limit client 

let count = 0;
let lastRequestTime = null;

app.get("/about", (req, res) => {
  // Retrieve the client's IP address
  const clientip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  
  // Get the current timestamp
  const currentTime = Date.now();

  // If it's been less than 20 seconds since the last request, block further requests
  if (count >= 5 && currentTime - lastRequestTime < 20000) {
    const remainingTime = Math.ceil((20000 - (currentTime - lastRequestTime)) / 1000);
    return res.status(429).send(`Too many requests. Please try again in ${remainingTime} seconds.`);
  }

  // Reset the count and timestamp if more than 20 seconds have passed
  if (currentTime - lastRequestTime >= 20000) {
    count = 0;
  }

  // Increment the request count
  count++;
  lastRequestTime = currentTime;

  // Check if the request count exceeds 5
  if (count > 5) {
    return res.status(429).send("Too many requests. Please try again later.");
  }

  // Send response with IP and count
  res.send({ clientip, count });
});
