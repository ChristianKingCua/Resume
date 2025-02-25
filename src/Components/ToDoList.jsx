import React from "react";

function ToDoList(props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <ul>
        {props.task.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex mt-4 justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition">
          Add
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Delete
        </button>
      </div>

      <div className="mt-8 p-4 bg-white rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-2 text-left">Instructions:</h2>
        <ul className="list-decimal text-left pl-5">
          <li>
            {props.instruct1} <strong>{props.instruct1Bold}</strong>
          </li>
          <li>{props.instruct2}</li>
          <li>
            <span className="font-semibold">{props.instruct3}</span>
            <ul className="pl-5">
              <li>{props.member1}</li>
              <li>{props.member2}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
