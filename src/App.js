import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./config";

function App() {
  const [msg, setMsg] = useState("");

  const getPost = async () => {
    const { data } = await axios.get(`${BASE_URL}/hello`);
    setMsg(data.msg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={getPost}>Получить</button>
        <h1>{msg}</h1>
      </header>
    </div>
  );
}

export default App;
