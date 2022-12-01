import React, { useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "./AdminChatbox.scss";

import {
  getConversationMessages,
  sendMessageToServer,
} from "../../api_calls/message_api";
import { toast } from "material-react-toastify";
import { io, Socket } from "socket.io-client";
import { Message } from "../../typings/reduxTypings";
interface Props {
  selectedConvo: string;
}
const AdminChatbox = ({ selectedConvo }: Props) => {
  const [serverMessages, setServerMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>(" ");
  const [sending, setSending] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket>();
  const scrollRef = useRef<any>();
  console.log(selectedConvo);

  console.log(socket, "socket information");
  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [serverMessages]);

  useEffect(() => {
    getServerMessages();
  }, [selectedConvo, sending]);

  const getServerMessages = async () => {
    const data = await getConversationMessages(selectedConvo);
    if (!data?.success) return toast.error(data?.message);
    console.log(data);
    setServerMessages(data?.messages);
  };

  const sendMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await sendMessageToDb();
  };
  const sendMessageToDb = async () => {
    setNewMessage("");
    setSending(true);
    const data = await sendMessageToServer(newMessage, "admin", selectedConvo);

    if (!data?.success) {
      toast.error(data?.message);
      return setSending(false);
    }
    if (data) setSending(false);
  };

  // send message to db

  console.log(newMessage);

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
        {serverMessages?.map((message, key) => (
          <div
            ref={scrollRef}
            className={`${message?.to === "admin" ? "chat-sent" : "chat-rec"}`}
          >
            <p className="title">{message?.text}</p>
          </div>
        ))}
        <div className="chat__send-opts">
          <form className="chat__inputs" action="" onSubmit={sendMessage}>
            <input
              type="text"
              name="message"
              id=""
              value={newMessage}
              className="message"
              onChange={(e) => setNewMessage(e.target.value)}
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
