import React from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "./AdminChatbox.scss";

const AdminChatbox = () => {
  return (
    <div className="admin__chatbox">
      <div className="chatbox__header">
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          }
          alt=""
        />
        <p className="title">Jubayer Hossain</p>
      </div>
      <div className="chatbox__main">
        <div className="chat-sent">
          <p className="title">Hello World</p>
        </div>
        <div className="chat-rec">
          <p className="title">Bye Bye World</p>
        </div>
        <div className="chat__send-opts">
          <form
            className="chat__inputs"
            action=""
            // onSubmit={sendMessage}
          >
            <input
              type="text"
              name="message"
              id=""
              className="message"
              onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor="upload" className="upload">
              <AttachFileIcon />
              <input type="file" id="upload" className="fileupload" />
            </label>
            <SendIcon className="sendIcon" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminChatbox;
