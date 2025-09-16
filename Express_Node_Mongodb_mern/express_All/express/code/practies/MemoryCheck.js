// 1 check  simple function methods  :::::

const express = require('express');
const startServer = require('../imp'); // Import the startServer function

const app = express();
const port = process.env.PORT || 9000;  // .env should define PORT if needed

app.use((req, res, next) => {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: 
      RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB, 
      Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB, 
      Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB, 
      External: ${Math.round(memoryUsage.external / 1024 / 1024)} MB`);
          next();
  });
  

app.get('/', (req, res) => {

    let obj={
        'name':'jugal',
        'age':27,
        'email':'jugal@gmail.com'
    }

    res.send(
        JSON.stringify(obj)
    );
});




app.listen(port , ()=>{
    console.log(`Server started on port  9000 ${port}`);
})



///2::: Check memory usage 

Key Updates:
Environment Variable Support: Uses .env for configurable port settings.
Memory Usage Route: /memory endpoint that returns memory usage in JSON.
Logging Middleware: Logs each incoming request’s method and URL.
Additional Route: An /info route to add more structure.
Error Handling Middleware: Catches and handles errors gracefully.


const express = require('express');
const startServer = require('../imp'); // Import the startServer function


// Load environment variables

const app = express();
const port = process.env.PORT || 9000;

// Middleware to log memory usage
app.use((req, res, next) => {
  const memoryUsage = process.memoryUsage();
  console.log(`Memory Usage: 
    RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB, 
    Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB, 
    Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB, 
    External: ${Math.round(memoryUsage.external / 1024 / 1024)} MB`);
  next();
});

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// Home route
app.get('/', (req, res) => {
  const obj = {
    name: 'Jugal',
    age: 27,
    email: 'jugal@gmail.com'
  };
  res.json(obj);
});

// Memory usage route (returns memory usage in JSON format)
app.get('/memory', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.json({
    rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
    heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
    heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
    external: `${Math.round(memoryUsage.external / 1024 / 1024)} MB`
  });
});

// Sample additional route
app.get('/info', (req, res) => {
  res.send('This is an additional route with some information.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



3 ::::::::: check memory  :::::::

1. NPM Packages for Memory Monitoring
node-memwatch
Monitors memory leaks and emits events like leak and stats.
Installation: npm install @airbnb/node-memwatch


const memwatch = require('@airbnb/node-memwatch');

memwatch.on('leak', (info) => {
  console.error('Memory leak detected:', info);
});

memwatch.on('stats', (stats) => {
  console.log('Memory stats:', stats);
});


2:heapdump
Generates snapshots of the memory heap that you can analyze in Chrome DevTools.
Installation: npm install heapdump

const heapdump = require('heapdump');
// Trigger heap snapshot
heapdump.writeSnapshot((err, filename) => {
  console.log(`Heap dump written to ${filename}`);
});


::v8-profiler-next
Allows you to profile memory and CPU for more in-depth analysis.
Installation: npm install v8-profiler-next

const v8Profiler = require('v8-profiler-next');
v8Profiler.startProfiling('CPU profile');
setTimeout(() => {
  const profile = v8Profiler.stopProfiling();
  profile.export((error, result) => {
    console.log(result);
    profile.delete();
  });
}, 10000);



::::::::::::::: Status check memory usage :::::::::
const express = require('express');
const statusMonitor = require('express-status-monitor')();

const app = express();
const port = process.env.PORT || 9000;

// Apply express-status-monitor middleware
app.use(statusMonitor);

// Home route
app.get('/', (req, res) => {
  const obj = {
    name: 'Jugal',
    age: 27,
    email: 'jugal@gmail.com'
  };
  res.json(obj);
});

// Memory usage route (returns memory usage in JSON format)
app.get('/memory', (req, res) => {
  const memoryUsage = process.memoryUsage();
  res.json({
    rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
    heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
    heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
    external: `${Math.round(memoryUsage.external / 1024 / 1024)} MB`
  });
});

// Access express-status-monitor dashboard at /status
app.get('/status', statusMonitor.pageRoute);

// Additional info route
app.get('/info', (req, res) => {
  res.send('This is an additional route providing server info.');
});

// Request logging middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
