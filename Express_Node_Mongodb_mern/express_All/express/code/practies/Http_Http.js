const express = require('express');
// const {get} = require('http'); http 

const {get} =require('https') //https 

const app = express();
const port = process.env.PORT || 9000;


get("https://www.google.com" , (res)=>{

  res.on('data' , (check)=>{
    console.log(check)
  })
  res.on('end' , ()=>{
    console.log("no more response")
  })
  
})

 /// advance Http and Http  .....................


 const express = require('express');
const { get } = require('https');

const app = express();
const port = process.env.PORT || 9000;

app.get('/fetch-google', (req, res) => {
  get("https://www.google.com", (response) => {
    let data = '';

    // Collect data chunks
    response.on('data', (chunk) => {
      data += chunk;
    });

    // On end of response
    response.on('end', () => {
      console.log("No more data");
      res.send(data); // Send the collected data as the response
    });
  }).on('error', (err) => {
    console.error('Error fetching data:', err);
    res.status(500).send('Error fetching data');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


 //////// Http2   ..................................


 const express = require('express');
const http2 = require('http2');

const app = express();
const port = process.env.PORT || 9000;

// Making an HTTP/2 request
const client = http2.connect('https://www.google.com');

// Create a request
const req = client.request({ ':path': '/' });

let data = '';

// Collect data chunks
req.on('data', (chunk) => {
  data += chunk;
});

// End event fires when the complete response has been received
req.on('end', () => {
  console.log("Response received from Google:");
  console.log(data);
  console.log("No more response");
  client.close(); // Close the HTTP/2 session
});

// Error handling
req.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

// End the request
req.end();

// Start the Express server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
