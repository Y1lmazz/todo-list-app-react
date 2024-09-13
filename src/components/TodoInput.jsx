import React, { useState } from 'react'

function TodoInput({ handleAddTodos, inputText, setInputText }) {


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddTodos(inputText);
            setInputText("");
        }
    }


    return (
        <>
            <div className="input-container">
                <input className='todo-input' type="text" placeholder='Enter todo...'
                    value={inputText}
                    onChange={(e) => (
                        setInputText(e.target.value)
                    )}
                    onKeyDown={handleKeyPress}
                />
                <button className='add-btn'
                    onClick={() => (
                        handleAddTodos(inputText),
                        setInputText("")
                    )}>EKLE</button>
            </div>
        </>

    )
}

export default TodoInput