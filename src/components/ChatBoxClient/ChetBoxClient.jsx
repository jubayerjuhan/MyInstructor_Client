import React, { useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useSelector } from "react-redux";
import {
  addConversation,
  getMessages,
  sendMessageToServer,
} from "../../api_calls/message_api";
import { toast } from "material-react-toastify";

const ChatBoxClient = ({
  setNewMessageRecived,
  newMessageRecived,
  adminSocket,
  socket,
}) => {
  const scrollRef = useRef();
  const [newMessageFromAdmin, setNewMessageFromAdmin] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);
  // check new incoming message and send status after render
  useEffect(() => {
    setNewMessageRecived(false);
    console.log(newMessageRecived, "new Message status");
  }, [socket]);
  useEffect(() => {
    loadMessage();
  }, [user, newMessageFromAdmin]);

  const loadMessage = async () => {
    const data = await getMessages(user?._id);
    setMessages(data?.messages);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket?.on("recieve_message_user", (data) => {
      setNewMessageFromAdmin([...newMessageFromAdmin, data]);
      if (data) setNewMessageRecived(true);
    });
  }, [socket]);

  console.log(newMessageFromAdmin);

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = await sendMessageToServer(newMessage, user?._id, "admin");
    if (!data?.success) return toast.error(data?.message);
    setMessages([...messages, data?.message]);

    // sending current conversation to top
    await addConversation(user?._id);

    // send message wih socket
    socket?.emit("send_message_to_admin", {
      message: newMessage,
      from: user?._id,
      to: adminSocket,
    });
  };
  return (
    <div>
      <div className="chat__app-box">
        {messages?.map((message) => (
          <div
            ref={scrollRef}
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
            onClick={() => setNewMessageRecived(false)}
            type="text"
            name="message"
            id=""
            className="message"
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
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
