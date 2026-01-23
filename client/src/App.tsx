import React, { useEffect, useState } from "react";
import { socket } from "./sockets/socket";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.once("connect", () => {
      console.log("Connected to server");
    });

    // Listen for messages from server
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    // Send each keystroke live to server
    socket.emit("typing", value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type anything..."
        style={{ width: "80%", padding: "8px" }}
      />
    </div>
  );
};

export default App;
