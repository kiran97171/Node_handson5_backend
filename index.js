const io = require("socket.io")({
    cors: {
      origin: "*",
    },
  });
  
  io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("chat", (data) => {
      io.emit("message", {
        username: data.username,
        message: data.message,
      });
    });
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
  
  const port = 5006;
  io.listen(port);
  console.log("server is running at port 5006");