import React, {useEffect} from 'react';
import {useState} from "react";
import '../styles/List.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ToDoList() {

    /*Will just be one key and nested list of to do items*/
    const [todos, setTodos] = useState([]);

    const [inputVal, setInputVal] = useState('');
    const [isListOpen, setIsListOpen] = React.useState(true);

    /*Will always set the list of ToDos to current local storage*/
    useEffect(() => {
        const storedToDos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedToDos);
    }, []);

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToDo = { text: inputVal, completed: false };

        /*sets todos list with what is currently in the list plus new to do*/
        const updatedTodos = [...todos, newToDo];

        /*Updates the one key of to do items*/
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        /*Resets  the input value*/
        setInputVal('');
    };

    const handleCheckboxChange = (index) => {
        const updatedTodos = [...todos];

        updatedTodos[index].completed = !updatedTodos[index].completed;

        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

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

    const handleDelete = (index) => {
        /*filter out current element, _ indicating it is not needed in the body, return true for all elements that are not
        * the current index being looked at*/
        const updatedTodos = todos.filter((_, i) => i !== index);

        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
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
                <ul id="tasks">
                    {/*Every To-Do is mapped as a list*/}
                    {todos.map((task, index) => (
                        <div className="list-item" key={index}>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label>
                                    <li className="strike">{task.text}</li>
                                </label>
                            </div>
                            <MoreHorizIcon className="options" fontSize="small"
                                           onClick={() => handleDelete(index)}/>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )

}