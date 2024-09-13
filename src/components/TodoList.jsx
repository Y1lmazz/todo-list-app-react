import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";


function TodoList({ todos, handleDeleteTodos, handleEditTodos }) {


    return (
        <>
            <ul className="todo-list">
                {todos.map((todo, todoIndex) => (
                    <li key={todoIndex} className='list-item'>
                        <p>{todo}</p>
                        <div className="icons">
                            <button className="edit-btn"
                                onClick={() => {
                                    handleEditTodos(todoIndex)
                                }}
                            >
                                <FaRegEdit />
                            </button>
                            <button className="delete-btn"
                                onClick={() => {
                                    handleDeleteTodos(todoIndex)
                                }}
                            >
                                <FaRegTrashCan />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList