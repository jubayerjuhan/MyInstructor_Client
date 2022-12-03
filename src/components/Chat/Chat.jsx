import React, { useEffect, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { io } from "socket.io-client";

import "./Chat.scss";
import ChatBoxClient from "../ChatBoxClient/ChetBoxClient.jsx";
import { useSelector } from "react-redux";

const Chat = () => {
  const [adminSocketId, setAdminSocketId] = useState("");
  const [userSockets, setUserSockets] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("https://portfolio-368819.uc.r.appspot.com");

    setSocket(socket);
  }, []);

  useEffect(() => {
    socket?.emit("add_user", { type: "user", userId: user?._id });

    socket?.on("connected_users", (data) => {
      data?.forEach((connectedSocket) => {
        if (connectedSocket.type === "admin")
          return setAdminSocketId(connectedSocket?.socketId);
        setUserSockets([...userSockets, connectedSocket]);
      });
    });
  }, [user, socket]);

  console.log(userSockets, "all sockets");

  return (
    <div className="chat__app">
      {open ? (
        <div className="chat__app-main">
          <div className="header">
            <p className="title">Chat With Us</p>
          </div>
          <ChatBoxClient socket={socket} adminSocket={adminSocketId} />
        </div>
      ) : (
        <></>
      )}
      <div className="chat__icon" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </div>
    </div>
  );
};

export default Chat;
