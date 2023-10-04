import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="container p-3 flex flex-col">
      <form onSubmit={addTodoHandler}>
        <div className="p-2">
          <input
            value={input}
            type="text"
            name="text"
            placeholder="Add to do"
            className="p-2 border border-solid border-2 font-Sarabun w-full"
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <div className="p-2">
          <button className="p-3 bg-slate-700 text-white">Submit todo</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
