import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-100 rounded-lg p-2">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="font-Sarabun p-3 bg-yellow rounded-xl">To do app.</h1>
      </div>

      <div className="card">
        <AddTodo />
      </div>
      <div className="card">
        <Todos />
      </div>
    </>
  );
}

export default App;
