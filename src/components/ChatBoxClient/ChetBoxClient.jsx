import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useSelector } from "react-redux";
import { getMessages, sendMessageToServer } from "../../api_calls/message_api";

const ChatBoxClient = ({ handleSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const { user } = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    loadMessage();
  }, [user]);

  const loadMessage = async () => {
    const data = await getMessages(user?._id);
    setMessages(data?.messages);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = await sendMessageToServer(newMessage, user?._id);
    setMessages([...messages, data?.message])
  };
  return (
    <div>
      <div className="chat__app-box">
        {messages?.map((message) => (
          <div
            className={`${
              message.from === user._id ? "chat-sent" : "chat-rec"
            }`}
          >
            <p>{message?.text}</p>
          </div>
        ))}
      </div>
      <div>
        <form className="chat__inputs" action="" onSubmit={sendMessage}>
          <input
            type="text"
            name="message"
            id=""
            className="message"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <label for="upload" className="upload">
            <AttachFileIcon />
            <input type="file" id="upload" className="fileupload" />
          </label>
          <SendIcon className="sendIcon" />
        </form>
      </div>
    </div>
  );
};

export default ChatBoxClient;
