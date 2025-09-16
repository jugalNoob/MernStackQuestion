(D) OS Kernel Threads
Network sockets (HTTP, TCP, UDP) are handled by the OS kernel asynchronously, not the libuv thread pool.

Node.js just registers callbacks for when data arrives.