import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import "./Chat.scss";

const Chat = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="chat__app">
      <div className="chat__app-main">
        <div className="header">
          <p className="title">Chat With Us</p>
        </div>
        <div className="chat__app-box">
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-sent">
            <p>Hello</p>
          </div>
          <div className="chat-rec">
            <p>Hello</p>
          </div>
        </div>
        <div className="chat__inputs">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              console.log("hello");
            }}
          >
            <input type="text" name="message" id="" className="message" />
            <label for="upload">
              <AttachFileIcon />
              <input type="file" id="upload" className="fileupload" />
            </label>
            <SendIcon />
          </form>
        </div>
      </div>
      <div className="chat__icon" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </div>
    </div>
  );
};

export default Chat;
