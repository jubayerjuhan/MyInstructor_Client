import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io.connect("http://192.168.12.77:5000");
    socket.auth = { userName: "juhan" };
    setSocket(socket);
    socket.on("connection", (data) => {
      console.log("data", data);
    });
  }, []);

  const sendText = () => {
    socket.emit("send_message", { message });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendText}>Send Text</button>
    </div>
  );
};

export default Chat;
