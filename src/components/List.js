import React from 'react';
import {useState} from "react";
import '../styles/List.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const [isListOpen, setIsListOpen] = React.useState(true);

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

    const closeList = () => {
        setIsListOpen(false);

        let div = document.getElementsByClassName("list-div");

        div[0].classList.remove("open-transition-list");
        div[0].classList.add("close-transition-list");
    }

    const openList = () => {
        setIsListOpen(true);

        let div = document.getElementsByClassName("list-div");

        div[0].classList.remove("close-transition-list");
        div[0].classList.add("open-transition-list");
    }

    function openSettings() {
        console.log('test')
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

                {isListOpen ?
                    (<KeyboardArrowLeftIcon className="close-list" fontSize="large" onClick={closeList} ></KeyboardArrowLeftIcon>)
                    :
                    (<KeyboardArrowRightIcon className="open-list" fontSize="large" onClick={openList} ></KeyboardArrowRightIcon>)}
            </div>
            <div>
                <ul>
                    {/*Every To-Do is mapped as a list*/}
                    {todos.map((todo) => (
                        <div className="list-item" key={todo}>
                            <div>
                                <input type="checkbox" />
                                <label>
                                    <li className="strike">{todo}</li>
                                </label>
                            </div>
                            <MoreHorizIcon className="options" fontSize="small" onClick={openSettings}/>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )

}