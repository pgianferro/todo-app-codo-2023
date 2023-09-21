import React, { useState } from "react";
import Task from "../Task/Task";

const TodoView = () => {
  //TAREAS

  const [tasks, setTasks] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });

  //FORMULARIO

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //Para dejar el campo del form vacío luego de agregar tarea
  const resetForm = () =>
    setForm({
      title: "",
    });

  //FUNCIONALIDAD CREAR TAREA
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = createTask(form.title);

    setTasks([...tasks, newTask]);

    resetForm();
  };

  //FUNCIONALIDAD BORRAR TAREA
  // const handleDelete = (event) => {
  //     const index = event.target.getAttribute("data-index");
  //     const updatedTasks = [...tasks];
  //     updatedTasks.splice(index, 1);
  //     setTasks(updatedTasks);
  //   };

  return (
    <div>
      <section>
        <h1>Lista de Tareas</h1>
      </section>

      <section>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
          <button type="submit">Agregar tarea</button>
        </form>
      </section>

      <section>
        {tasks.map((task) => {
          return (
            <Task key={task.id} title={task.title} completed={task.completed} />
          );
        })}
      </section>
    </div>
  );
};

export default TodoView;

//https://github.com/Joelnicolass/CaC22805/blob/master/src/ToDoList/hooks/useTodo.js
