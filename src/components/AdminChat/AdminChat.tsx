import { toast } from "material-react-toastify";
import React, { useEffect, useState } from "react";
import { getConversations } from "../../api_calls/message_api";
import logo from "../../assets/logo.png";
import { Conversation } from "../../typings/reduxTypings";
import AdminChatbox from "../AdminChatbox/AdminChatbox";
import "./AdminChat.scss";

const AdminChat = () => {
  const [convos, setConvos] = useState<Conversation[]>();
  const [selectedConvo, setSetSelectedConvo] = useState<any>("");
  useEffect(() => {
    getConvos();
  }, []);

  const getConvos = async () => {
    const data = await getConversations();
    if (data.success) return setConvos(data?.conversations);
  };

  console.log(selectedConvo, "selectedConvo");
  return (
    <div className="adminChat__main">
      <div className="adminChat__sidebar">
        <div className="adminChat__conversations">
          {convos?.map((convo, key) => (
            <div
              className="adminChat__conversation"
              key={key}
              onClick={() => setSetSelectedConvo(convo._id)}
            >
              <div className="image">
                <img src={convo.avater} alt="" />
              </div>
              <p className="name">Jubayer Juhan</p>
            </div>
          ))}
        </div>
      </div>
      <div className="adminChat__chatcontainers">
        {selectedConvo ? (
          <AdminChatbox selectedConvo={selectedConvo} />
        ) : (
          <div className="no__convo__selected">
            <p className="title">Please Select a Conversation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminChat;
