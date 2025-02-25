import { useState } from 'react'
import ToDoList from './Components/ToDoList'

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <ToDoList 
        task={[
          "Learn React",
          "Build a To-Do List",
          "Master JavaScript",
          "Apply for Jobs"
        ]}
        instruct1="Create a new React App, provide a project name of:"
        instruct1Bold="todo-list"
        instruct2="Install TailwindCSS"
        instruct3="Members:"
        member1="Tristan Raven Seblario"
        member2="Christian King Cua"
      />
    </div>
  );
}

export default App;