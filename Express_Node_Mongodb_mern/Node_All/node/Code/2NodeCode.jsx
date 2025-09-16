21. Cluster and Child Processes
Node.js Cluster Module for Scaling Applications
Forking Child Processes in Node.js
Managing Multiple Processes in a Single Application
Communication between Child Processes



18. Middleware in Node.js
Built-in Middleware in Express
Third-party Middleware (e.g., morgan, helmet, cors)
Writing Custom Middleware Functions
Middleware Chaining












1:::5. File System (fs) Module .............>>>>>>>>>>>>>>>>>>>>

5. File System (fs) Module
Reading and Writing Files
Working with Directories
File and Directory Permissions
File Streams
Handling File I/O asynchronously

2. File System (fs) Module
Reading/Writing Files: fs.readFile, fs.writeFile, fs.promises.
Streams: Readable and writable streams for large files.
File System Watchers: fs.watch and fs.watchFile for monitoring file changes.
Working with Directories: fs.mkdir, fs.readdir, fs.rmdir.

0::Creata file system 

....fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
----------------------------------------------------------
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

---
....fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

---
....fs.writeFile('file.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});

----
...fs.appendFile('file.txt', "fuck YOU all", 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data appended to file successfully.');
  });



0::File and Directory Permissions 

1. Creating a Directory 


const fs = require('fs');

// Asynchronous
fs.mkdir('path/to/newDir', { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory created');
  }
});

// Using Promises
fs.promises.mkdir('path/to/newDir', { recursive: true })
  .then(() => console.log('Directory created'))
  .catch(console.error);

2. Reading a Directory

const fs = require('fs');

// Asynchronous
fs.readdir('path/to/directory', (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory contents:', files);
  }
});

// Using Promises
fs.promises.readdir('path/to/directory')
  .then(files => console.log('Directory contents:', files))
  .catch(console.error);


3. Checking if a Directory Exists
const fs = require('fs');

// Synchronous check
if (fs.existsSync('path/to/directory')) {
  console.log('Directory exists');
} else {
  console.log('Directory does not exist');
}

// Asynchronous check using fs.stat
fs.stat('path/to/directory', (err, stats) => {
  if (err) {
    console.error(err);
  } else if (stats.isDirectory()) {
    console.log('This is a directory');
  } else {
    console.log('This is not a directory');
  }
});

4. Deleting a Directory

const fs = require('fs');

// Removing a directory (for non-empty directories use recursive option)
fs.rm('path/to/directory', { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory removed');
  }
});

// Using Promises
fs.promises.rm('path/to/directory', { recursive: true })
  .then(() => console.log('Directory removed'))
  .catch(console.error);


00::File System Watchers: fs.watch and fs.watchFile  

const fs = require('fs');

fs.watch('path/to/fileOrDir', (eventType, filename) => {
  if (filename) {
    console.log(`${filename} has been ${eventType}`);
  } else {
    console.log('filename not provided, but an event occurred');
  }
});



fs.watchFile(filename, [options], (curr, prev) => { ... });

filename: The file to watch.

options: Optional settings:

persistent: Whether the process should continue to run as long as files are being watched. Default is true.
interval: Time in milliseconds for polling. Default is 5007.
Callback Parameters:

curr: The current fs.Stats object representing the file.
prev: The previous fs.Stats object.

const fs = require('fs');

// Watch a specific file
fs.watchFile('path/to/file', { interval: 1000 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('File has been modified');
  }
});

Common Use Cases:
When precise time-based polling is needed.
Watching a file that requires consistent updates (e.g., databases, large files that change incrementally).

Key Differences Between fs.watch() and fs.watchFile():
Feature	fs.watch()	fs.watchFile()
Efficiency	Native OS events (more efficient)	Polling-based (less efficient)
Real-time Events	Responds instantly to changes	Detects changes on polling
Recursive Support	Supports recursive watching	No recursive support
Reliability	Depends on OS features	Reliable, but resource-heavy
Cross-platform	May behave differently on different OS	Consistent across platforms






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