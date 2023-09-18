import React, { useState } from "react";

// estado = tareas[]
// estado = form {}
// event = submit

/* 

   tareas.map((tarea)=>{
        return (
            <div>
                cosas
            </div>
        )   
    }) 

*/

const ToDo = () => {

const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

const handleTasks = (event) => {

  event.preventDefault(); // Evita la recarga de la página

  if (inputValue.trim() !== "") {
    setTasks([...tasks,inputValue]);
    setInputValue("");
  }
}

  return (
    <div>
      <h1>To Do List</h1>

      <section>
        <h2>List</h2>

        {
          // tareas.map((tarea)=>{
        }

        <ul>
          {tasks.map((task, index) => (
          <div
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            border: "1px solid white",
            alignItems: "center",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          <input type="checkbox" name="" id="" />
          <li key={index}>{task}</li>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>

          ))}
          
        </ul>
      </section>

      <section>
        <form>
          <input type="text" value={inputValue} onChange={handleInputChange} name="inputValue"/>
          <button onClick={handleTasks}>Add</button>
          </form>
      </section>
    </div>
  );
};

export default ToDo;


//https://github.com/Joelnicolass/CaC22805/blob/master/src/ToDoList/hooks/useTodo.js
