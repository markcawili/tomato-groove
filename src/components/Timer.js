import React from 'react';
import {useState, useEffect} from "react";
import Modal from "./Modal";
import sound from '../resources/timer.wav'
import '../styles/Timer.css'

export default function Timer() {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [isBreak, setIsBreak] = React.useState(false);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const audio = new Audio(sound);

    /*Every time something happens with our seconds we want something to be done in useEffect (render)*/
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (isActive) {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        let minutes = isBreak ? 25 : 5;
                        let seconds = 0;

                        setIsActive(false);
                        setMinutes(minutes);
                        setSeconds(seconds);
                        setIsBreak(!isBreak);
                        audio.play();

                        setShowModal(true);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }

        }, 1000)
    }, [seconds, isActive])

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="pomodoro">
            <div className="timer" onClick={() => setIsActive(true)}>{timerMinutes}:{timerSeconds}</div>

            {/*Modal is set here and is only opened based on the variables, the function toggleModal is passed along*/}
            <Modal isOpen={showModal} toggleModal={toggleModal} isBreak={isBreak}/>
        </div>
    )

}