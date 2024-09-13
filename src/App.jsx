import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  // Listedeki todo'yu editlemek için bu değeri parent elementlerine atamam lazım
  const [inputText, setInputText] = useState("");


  // Local storage'a kaydetme fonksiyonu
  const renderData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }))

  }

  const handleAddTodos = (newTodo) => {
    if (newTodo === "") {
      alert("Liste boş olamaz!")
    }
    else {
      const newTodos = [...todos, newTodo]
      setTodos(newTodos);
      renderData(newTodos)
    }
  }

  const handleDeleteTodos = (index) => {
    const newTodos = todos.filter((todo, todoIndex) =>
      todoIndex !== index
    )
    setTodos(newTodos);
    renderData(newTodos)
  }

  const handleEditTodos = (index) => {
    const textToBeEdited = todos[index];
    setInputText(textToBeEdited)
    handleDeleteTodos(index)
  }

  // Local storage management
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem("todos")
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos} inputText={inputText} setInputText={setInputText} handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App
