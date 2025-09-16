(C) Thread Pool (libuv worker threads)
By default, size = 4 (can be increased via UV_THREADPOOL_SIZE env variable).

Used for:

File system operations (read/write files)

DNS lookups (dns.lookup)

Crypto (crypto.pbkdf2, crypto.scrypt, crypto.randomBytes)

Compression (zlib)

These run in parallel threads so the event loop isn’t blocked.



3️⃣ CPU-Intensive Tasks & Problems
If you run a CPU-heavy task on the main thread:


// This will block EVERY request for ~5 seconds
function blockCPU() {
  const start = Date.now();
  while (Date.now() - start < 5000) {}
}

app.get("/", (req, res) => {
  blockCPU();
  res.send("Done");
});
