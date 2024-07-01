import React from 'react';
import {useState} from "react";
import '../styles/List.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';export default function ToDoList() {

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

    function closeList() {
        let div = document.getElementsByClassName("list-div");

        div[0].classList.remove("open-transition-list");
        div[0].classList.add("close-transition-list");

        /* TODO: need to add an open button on close */
    }

    function open() {
        let div = document.getElementsByClassName("list-div");

        div[0].classList.remove("close-transition-list");
        div[0].classList.add("open-transition-list");
    }

    return (
        <div className="list-div">
            <div className="list-div-header">
                <div>
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
                </div>
                <KeyboardArrowLeftIcon className="close-list" fontSize="large" onClick={closeList} ></KeyboardArrowLeftIcon>
            </div>
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