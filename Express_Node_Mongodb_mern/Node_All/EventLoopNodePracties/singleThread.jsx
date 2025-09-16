2️⃣ The Main Components
(A) Single Thread (Main Thread + Event Loop)
Executes your JS code line-by-line.

Manages the event loop, which decides when callbacks and promises are run.

Handles non-blocking I/O without creating new threads for each connection.

💡 Key point: If you run CPU-intensive code here (like hashing, big loops, JSON parsing of huge files), you block the event loop and slow down all requests.