const express = require('express'); const http = require('http'); const { 
Server } = require('socket.io'); const app = express(); const server = 
http.createServer(app); const io = new Server(server); 
app.use(express.static('public')); io.on('connection', (socket) => {
  console.log(`🟢 ${socket.id} connected`);
  socket.on('buttonPressed', ({ data }) => { 
    io.emit('buttonPressed', {data:data});
  });
  socket.on('disconnect', () => { console.log(`🔴 ${socket.id} disconnected`);
  });
});
const PORT = process.env.PORT || 3000; server.listen(PORT, () => { 
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
