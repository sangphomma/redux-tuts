import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    console.log(id);
    dispatch(removeTodo(id));
  };

  //console.log(todos);
  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-between font-Sarabun font-medium text-xl py-2 px-3 mb-1 bg-green-100 rounded-md"
            >
              <span className="">{todo.name}</span>
              <span
                onClick={() => removeTodoHandler(todo.id)}
                className="w-[24px] h-[24px] bg-red-700
               hover:text-red-700 hover:bg-red-400
                text-white text-md cursor-pointer flex items-center justify-center rounded-full"
              >
                &#10005;
              </span>
            </div>
          );
        })
      ) : (
        <div className="p-5 bg-indigo-400 text-white font-extrabold text-3xl rounded-2xl">
          No todo
        </div>
      )}
    </div>
  );
};

export default Todos;
