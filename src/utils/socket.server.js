import makeHandlers from "./socket.handlers";
import ClientManager from "./socket.client.manager";
import ChatroomManager from "./socket.room.manager";

const clientManager = ClientManager();
const chatroomManager = ChatroomManager();

const logger = console;

export default server => {
  const io = require("socket.io")(server);

  io.on("connection", client => {
    const {
      handleRegister,
      handleJoin,
      handleLeave,
      handleMessage,
      handleGetChatrooms,
      handleGetAvailableUsers,
      handleDisconnect
    } = makeHandlers(client, clientManager, chatroomManager);

    logger.log("client connected", client.id);

    client.on("register", handleRegister);

    client.on("join", handleJoin);

    client.on("leave", handleLeave);

    client.on("message", handleMessage);

    client.on("chatrooms", handleGetChatrooms);

    client.on("availableUsers", handleGetAvailableUsers);

    client.on("disconnect", () => {
      logger.log("client disconnect...", client.id);
      handleDisconnect();
    });

    client.on("error", err => {
      logger.log("received error from client:", client.id);
      logger.log(err);
    });
  });
};
