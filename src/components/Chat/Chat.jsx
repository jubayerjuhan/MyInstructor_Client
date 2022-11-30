import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import "./Chat.scss";
import ChatBoxClient from "../ChatBoxClient/ChetBoxClient.jsx";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

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
