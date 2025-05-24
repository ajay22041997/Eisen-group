import React, { useState, useEffect } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  // Handle open/close with animation
  const toggleChat = () => {
    if (isOpen) {
      // start closing animation
      setIsClosing(true);
    } else {
      setIsOpen(true);
    }
  };

  // After closing animation ends, hide the popup
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsClosing(false);
        setIsOpen(false);
      }, 400); // match animation duration in ms
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botMessage = {
      from: "bot",
      text: getBotResponse(input)
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotResponse = (question) => {
    const lower = question.toLowerCase();
    if (lower.includes("hello")) return "Hello! 👋";
    if (lower.includes("price")) return "Our prices vary by product. Check our pricing page!";
    if (lower.includes("contact")) return "You can contact us at support@example.com.";
    return "Sorry, I didn't understand that. Try asking something else!";
  };

  return (
    <div>
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>

      {(isOpen || isClosing) && (
        <div className={`chatbot-popup ${isClosing ? "closing" : ""}`}>
          <div className="chatbot-header">
            ChatBot
            <span className="close-btn" onClick={toggleChat}>×</span>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              autoFocus
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
 