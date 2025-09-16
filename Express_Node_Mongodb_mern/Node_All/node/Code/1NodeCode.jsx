Q what is Modules In Node.js ?
Ans--<>const All = require("./mod");

app.get('/', (req, res) => {
    // Combine the responses into one
    res.send(`${All()} `);
});

const opt=()=>{
return "karana sharta"
}
module.exports=opt;


Q types of console in node.js

const { Console } = require('node:console');
    res.send("jugal")
    console.warn("jugal")
    console.error("jugal")
    console.table("Apin add")
    console.assert(true, 'does nothing');
    console.log(new Date().toISOString(), "jugal");
console.debug():
console.trace():
console.time() and console.timeEnd(): Used together to measure the time taken by a specific block of code. console.time() 


Q what file system ?
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
----------------------------------------------------------
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

---
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

---
fs.writeFile('file.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});

----
fs.appendFile('file.txt', "fuck YOU all", 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data appended to file successfully.');
  });

---------------------------------------------------------------------------------
Q Node.js URL ?
Ans:var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'



Q what is Cluster In node.js Important Topices  --------------------<><><><>
const express = require('express');
const app = express();
const port = 9000;
const fs = require('fs');
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
    // If this is the primary process, create worker processes
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // If this is a worker process, define and start an HTTP server

    const express = require('express');
    const app = express();
    const port = 3000; // Define your desired port number

    app.get('/', (req, res) => {
        res.send("jugal");
        console.log(`Worker ${process.pid} is running`);
    });

    app.listen(port, () => {
        console.log(`Worker ${process.pid} is running on port ${port}`);
    });
}




Q what Operating System -------------->

const os = require('os');
// End of Line marker
console.log('End of Line marker:', JSON.stringify(os.EOL));
// CPU architecture
console.log('CPU architecture:', os.arch());

// Available constants
console.log('OS Constants:', os.constants);

// CPU information
console.log('CPU Information:', os.cpus());

// Path to the null device
console.log('Path to Null Device:', os.devNull);

// Endianness
console.log('Endianness:', os.endianness());

// Free system memory
console.log('Free System Memory:', os.freemem());

// Get priority of the current process
console.log('Priority of Current Process:', os.getPriority());

// Home directory of the current user
console.log('Home Directory:', os.homedir());

// Hostname of the operating system
console.log('Hostname:', os.hostname());

// System load average
console.log('System Load Average:', os.loadavg());

// Machine hardware name
console.log('Machine Hardware Name:', os.machine());

// Network interfaces
console.log('Network Interfaces:', os.networkInterfaces());

// Operating system platform
console.log('Platform:', os.platform());

// Operating system release
console.log('OS Release:', os.release());

// Default directory for temporary files
console.log('Temporary Directory:', os.tmpdir());

// Total system memory
console.log('Total System Memory:', os.totalmem());

// Operating system type
console.log('OS Type:', os.type());

// System uptime
console.log('System Uptime (seconds):', os.uptime());

// Information about the current user
console.log('User Information:', os.userInfo());

// Operating system version
console.log('OS Version:', os.version());





const os = require('os');

console.log('End of Line:', os.EOL);
console.log('Available Parallelism:', os.availableParallelism()); // This function is not standard, so you need to provide its implementation or find a library that offers it.
console.log('Architecture:', os.arch());
console.log('CPU Constants:', os.constants);
console.log('CPU Cores:', os.cpus());
console.log('Null Device Path:', os.devNull);
console.log('Endianness:', os.endianness());
console.log('Free Memory:', os.freemem());
console.log('System Uptime:', os.uptime(), 'seconds');

const userInfo = os.userInfo();
console.log('User Information:', userInfo);

console.log('Home Directory:', os.homedir());
console.log('Host Name:', os.hostname());
console.log('Load Average:', os.loadavg());
console.log('Machine Type:', os.machine());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Platform:', os.platform());
console.log('Operating System Release:', os.release());
console.log('Temporary Directory:', os.tmpdir());
console.log('Total Memory:', os.totalmem());
console.log('Operating System Type:', os.type());





|||||||||||||||||| Request Type with code
---------------->

app.get('/json-response', (req, res) => {
  res.type('json');
  res.json({ message: 'JSON response' });
});


app.get('/status-message', (req, res) => {
  res.status(404);
  res.send(`Status Message: ${res.statusMessage}`);
});



app.get('/locals-example', (req, res) => {
  res.locals.variable = 'Local variable';
  res.render('template');
});


app.get('/end-example', (req, res) => {
  res.end('Response ended');
});



app.get('/download', (req, res) => {
  res.sendFile('/path/to/file.txt');
});



app.get('/clear-cookie', (req, res) => {
  res.clearCookie('user');
  res.send('Cookie cleared!');
});


app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'john', { maxAge: 900000, httpOnly: true });
  res.send('Cookie set!');
});


app.get('/custom-header', (req, res) => {
  res.setHeader('X-Custom-Header', 'Custom Value');
  res.send('Response with a custom header.');
});


app.get('/redirect-example', (req, res) => {
  res.redirect('/new-location');
});

app.get('/new-location', (req, res) => {
  res.send('Redirected to a new location.');
});

Q what is Stream ?  -----------------------<><><>

    app.get('/', (req, res) => {
    //  fs.readFile("./file.txt" , (err , data)=>{
    //     res.end(data)
    // })

    const stream= fs.createReadStream("./file.txt" , "utf-8")
    stream.on('data' , (chunk) => res.write(chunk))
    stream.on('end' , () => res.end())
    });




:::::::::::::: Express   Alll iNformation With code

// Types  middleware in Express


//CORS Middleware:
const cors = require('cors');
app.use(cors());



//Third-Party Middleware:

const morgan = require('morgan');
app.use(morgan('dev')); // Request logging middleware



//Error Handling Middleware:
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('This middleware is only for routes under this router.');
  next();
});


//Application-level Middleware:

const express = require('express');
const app = express();

app.use(express.json()); // JSON parsing middleware
app.use(express.urlencoded({ extended: true })); // URL-encoded data parsing middleware



//Authenticate middle ware
const express = require('express');
const app = express();
const port = 3000;

// Sample user data (in a real application, this should be stored securely)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Middleware to parse JSON request bodies
app.use(express.json());

// Authentication middleware
function authenticate(req, res, next) {
  const { username, password } = req.body;

  // Check if a user with the provided credentials exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Attach the user to the request object for later use
  req.user = user;

  // Continue to the next middleware or route
  next();
}

// Protected route
app.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Welcome to your profile, ' + req.user.username + '!' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



//JWT Simples Line

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// Secret key for signing and verifying JWTs (replace with your secret)
const secretKey = 'your-secret-key';

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample user data (in a real application, this should be stored securely)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Generate and return a JWT token for a valid user
function generateToken(user) {
  const payload = { id: user.id, username: user.username };
  const options = { expiresIn: '1h' }; // Token expires in 1 hour
  return jwt.sign(payload, secretKey, options);
}

// Authentication route to generate a JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if a user with the provided credentials exists
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Generate a JWT token and send it in the response
  const token = generateToken(user);
  res.json({ token });
});

// Protected route that requires a valid JWT token
app.get('/profile', (req, res) => {
  // Verify the JWT token from the request
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    res.json({ message: 'Welcome to your profile, ' + decoded.username + '!' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




||||||||||||