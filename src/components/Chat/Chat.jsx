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
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("ws://localhost:5000");
    setSocket(socket);
  }, []);

  useEffect(() => {
    socket?.emit("add_user", { type: "user", userId: user?._id });
    socket?.on("connected_users", (data) => {
      console.log("data from socket 24 chat", data);
    });
  }, [user, socket]);

  return (
    <div className="chat__app">
      {open ? (
        <div className="chat__app-main">
          <div className="header">
            <p className="title">Chat With Us</p>
          </div>
          <ChatBoxClient />
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
