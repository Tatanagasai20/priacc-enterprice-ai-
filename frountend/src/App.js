import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [workflow, setWorkflow] = useState("Apply Leave");
  const [details, setDetails] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    setMessages([...messages, { sender: "Me", text: input }]);
    setInput("");

    const aiRes = await fetch("/ai/intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const ai = await aiRes.json();

    if (ai.intent === "apply_leave") {
      const backendRes = await fetch("/api/apply-leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employee: "John Doe" })
      });
      const result = await backendRes.text();
      setMessages((msgs) => [...msgs, { sender: "HR", text: result }]);
    }
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
          <button onClick={() => alert(`Triggered: ${workflow}\n${details}`)}>Send</button>
        </section>
      </main>
    </div>
  );
};

export default App;
