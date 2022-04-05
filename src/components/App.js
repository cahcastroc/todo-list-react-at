import React from 'react';
import './App.css';
import { useState } from "react"
import Form from './Form';
import Todos from './Todos'
import icon from '../img/icon.png'

function App() {

  const [tasks, setTasks] = useState([])

  const add = (task) => {
    const getDate = Date.now()
    const today = new Date(getDate)
    const addTask = {
      task: task,
      complete: false,
      date: today.toLocaleDateString()
    }
    setTasks([...tasks, addTask])

  }

  function deleteItem(index) {
    let newArrTasks = [...tasks]
    newArrTasks.splice(index, 1)
    setTasks(newArrTasks)
    alert("Tarefa Excluída")
  }

  function complete(index) {
    let newArrTasks = [...tasks]
    newArrTasks[index].complete = !newArrTasks[index].complete
    setTasks(newArrTasks)

  }


  return (
    <div className="App">

      <h1> <img src={icon} id="icon" alt="Ícone de uma lista de tarefa com coração" />
        <span id="title">Lista de Tarefas</span>
      </h1>
      <Form add={add}></Form>
      <Todos tasks={tasks} deleteItem={deleteItem} complete={complete}></Todos>
    </div>
  );
}

export default App;




