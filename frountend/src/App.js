import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([
    { sender: "Me", text: "Hi" },
    { sender: "HR", text: "I'm here to help you. Please provide more details." },
  ]);
  const [input, setInput] = useState("");
  const [workflow, setWorkflow] = useState("Apply Leave");
  const [details, setDetails] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { sender: "Me", text: input }]);
    setInput("");
  };

  const triggerWorkflow = () => {
    alert(`Triggered: ${workflow}\nDetails: ${details}`);
    setDetails("");
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Channels</h2>
        <ul>
          <li>General</li>
          <li>HR</li>
          <li>Procurement</li>
          <li>Inventory</li>
        </ul>
      </aside>

      <main className="main">
        <header className="header">PriaccEnterprise.AI</header>

        <section className="chat">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "Me" ? "me" : "hr"}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </section>

        <div className="input-row">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>

        <section className="workflow">
          <h3>Trigger Workflow</h3>
          <label>Select Type</label>
          <select value={workflow} onChange={(e) => setWorkflow(e.target.value)}>
            <option>Apply Leave</option>
            <option>Raise PO</option>
            <option>Procure Asset</option>
          </select>
          <label>Details</label>
          <textarea
            placeholder="Details..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button onClick={triggerWorkflow}>Send</button>
        </section>
      </main>
    </div>
  );
};

export default App;
