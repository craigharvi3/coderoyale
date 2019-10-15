// eslint-disable-next-line import/no-extraneous-dependencies
const io = require("socket.io-client");

const logger = console;

export default function() {
  const socket = io.connect();

  function registerHandler(onMessageReceived) {
    socket.on("message", onMessageReceived);
  }

  function unregisterHandler() {
    socket.off("message");
  }

  socket.on("error", err => {
    logger.log("received socket error:");
    logger.log(err);
  });

  function register(name, cb) {
    socket.emit("register", name, cb);
  }

  function join(chatroomName, cb) {
    socket.emit("join", chatroomName, cb);
  }

  function leave(chatroomName, cb) {
    socket.emit("leave", chatroomName, cb);
  }

  function message(chatroomName, msg, cb) {
    socket.emit("message", { chatroomName, message: msg }, cb);
  }

  function getChatrooms(cb) {
    socket.emit("chatrooms", null, cb);
  }

  function getAvailableUsers(cb) {
    socket.emit("availableUsers", null, cb);
  }

  return {
    register,
    join,
    leave,
    message,
    getChatrooms,
    getAvailableUsers,
    registerHandler,
    unregisterHandler
  };
}
