import React from 'react';
import {useState} from "react";
import '../styles/List.css'

export default function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /*Sets To Do List with what is currently in the list plus input value*/
        setTodos((todo) => [...todo, inputVal]);
        /*Resets  the input value*/
        setInputVal('');
    };

    return (
        <div className="list-div">
            <h3>To Do List</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter Todo"
                    type="text"
                    name="task-entry"
                    value={inputVal}
                    onChange={handleInputChange}
                />
            </form>
            <div>
                <ul>
                    {/*Every To-Do is mapped as a list*/}
                    {todos.map((todo) => (
                        <label className="list">
                            <input type="checkbox"></input>
                            <li className="strike" key={todo}>{todo}</li>
                        </label>
                    ))}
                </ul>
            </div>
        </div>
    )

}