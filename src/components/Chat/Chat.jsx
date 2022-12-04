import React, { useEffect, useRef, useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { io } from "socket.io-client";

import "./Chat.scss";
import ChatBoxClient from "../ChatBoxClient/ChetBoxClient.jsx";
import { useSelector } from "react-redux";
import { WEBSOCKET_URL } from "../../client.js";
import { Button } from "@mui/material";
import NotificationSound from "../../assets/mixkit-positive-notification-951.wav";
const Chat = () => {
  const [newMessageRecived, setNewMessageRecived] = useState(false);
  const [adminSocketId, setAdminSocketId] = useState("");
  const [userSockets, setUserSockets] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);

  // notification sound when message arrive
  const audioPlayer = useRef(null);

  if (newMessageRecived) {
    audioPlayer.current.play();
  }

  useEffect(() => {
    if (!user || user?.type === "learner")
      return console.log("No User Available...");
    const socket = io(WEBSOCKET_URL);

    setSocket(socket);
  }, [user]);

  useEffect(() => {
    if (!user || user?.type === "learner")
      return console.log("No User Available...");
    socket?.emit("add_user", { type: "user", userId: user?._id });

    socket?.on("connected_users", (data) => {
      data?.forEach((connectedSocket) => {
        if (connectedSocket.type === "admin")
          return setAdminSocketId(connectedSocket?.socketId);
        setUserSockets([...userSockets, connectedSocket]);
      });
    });
  }, [user, socket]);

  console.log(userSockets, "all sockets", newMessageRecived);

  return (
    <div className="chat__app">
      <audio ref={audioPlayer} src={NotificationSound} />
      {open ? (
        <div className="chat__app-main">
          <div className="header">
            <p className="title">Chat With Us</p>
          </div>
          {!user || user?.type === "learner" ? (
            <div className="user__not-available">
              <p className="title">Please Login To Send Chat</p>
              <Button
                title={"Login"}
                style={{ color: "#faa41a" }}
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </Button>
            </div>
          ) : (
            <ChatBoxClient
              socket={socket}
              newMessageRecived={newMessageRecived}
              adminSocket={adminSocketId}
              setNewMessageRecived={setNewMessageRecived}
            />
          )}
        </div>
      ) : (
        <></>
      )}
      <div className="chat__icon" onClick={() => setOpen(!open)}>
        {newMessageRecived && <div className="new__message-bubble"></div>}
        {open ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </div>
    </div>
  );
};

export default Chat;
