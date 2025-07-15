import React, { useState } from "react";
import './App.css';

const channels = ["General", "HR", "Procurement", "Inventory"];

function App() {
  const [messages, setMessages] = useState([{ sender: "HR", text: "I'm here to help you. Please provide more details." }]);
  const [input, setInput] = useState("");
  const [workflowType, setWorkflowType] = useState("Apply Leave");
  const [workflowDetails, setWorkflowDetails] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { sender: "Me", text: input }]);
    setInput("");
  };

  const sendWorkflow = () => {
    alert(`Workflow Sent: ${workflowType}\nDetails: ${workflowDetails}`);
    setWorkflowDetails("");
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h3>Channels</h3>
        {channels.map(ch => <p key={ch}>🔹 {ch}</p>)}
      </div>

      <div className="main">
        <div className="header">PriaccEnterprise.AI</div>

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg ${msg.sender === "Me" ? "me" : "hr"}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className="input-row">
          <input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>

        <div className="workflow-box">
          <h4>Trigger Workflow</h4>
          <label>Select Type</label>
          <select value={workflowType} onChange={(e) => setWorkflowType(e.target.value)}>
            <option>Apply Leave</option>
            <option>Raise PO</option>
            <option>Create Request</option>
          </select>

          <label>Details</label>
          <textarea
            placeholder="Details..."
            value={workflowDetails}
            onChange={(e) => setWorkflowDetails(e.target.value)}
          ></textarea>

          <button className="workflow-btn" onClick={sendWorkflow}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
