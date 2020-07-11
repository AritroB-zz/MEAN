const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");
var express = require('express');
var socketIO = require('socket.io');

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
// server.listen(port);

var socketIOServer = socketIO.listen(server);

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

socketIOServer.sockets.on("connection", (socket) => {
  console.log("Socket is connected!");

  socket.on("createPost", (post)=> {
    socketIOServer.emit("createPost", post);
    console.log("Create Post socket emmitted");
  });

  socket.on("updatePost", (post)=> {
    socketIOServer.emit("updatePost", post);
    console.log("Update Post socket emmitted");
  });

  socket.on("deletePost", (post)=> {
    socketIOServer.emit("deletePost", post);
    console.log("Delete Post socket emmitted");
  });
});


