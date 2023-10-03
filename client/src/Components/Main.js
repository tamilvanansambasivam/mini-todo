import React from "react";

import React, { useState } from 'react';

function Main() {
  // Define state variables for tasks and input
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Define a function to add a new task
  const addTask = () => {
    if (input !== '') {
      // Create a new array with the current tasks and the new task
      setTasks([...tasks, input]);
      // Clear the input field
      setInput('');
    }
  };

  // Define a function to delete a task by its index
  const deleteTask = (index) => {
    // Create a copy of the current tasks array
    const updatedTasks = [...tasks];
    // Remove the task at the specified index
    updatedTasks.splice(index, 1);
    // Update the tasks state with the modified array
    setTasks(updatedTasks);
  };

  return (
    <div className="space-x-2 space-y-4 m-4 p-2 text-center w-[50%] mx-auto  font-serif ">
      <h1 className=" text-xl">Todo App</h1>
      <div  >
        {/* Input field for adding tasks */}
        <input
        className="bg-gray-100 pl-2  rounded-sm"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* Button to add a task */}
        <button onClick={addTask} className="bg-green-300 font-semibold rounded-sm px-2">Add</button>
      </div>
      <ul>
        {/* Map over the tasks array and display each task */}
        {tasks.map((task, index) => (
          <li key={index} className="flex rounded-sm bg-amber-200 my-4 flex-wrap justify-between ml-2">
            {task}
            {/* Button to delete a task */}
            <button className="bg-red-500 text-white px-4 rounded-sm "
            onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default Main;