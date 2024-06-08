import React, { useState } from "react";
import "../styles/Modal.css";

export default function Modal({isOpen, toggleModal}) {

    /*Will not render if it is open*/
    if (!isOpen) return null;

    return (
        <>
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <h2>TEST</h2>
                        <p>Time for a break!</p>
                        <button className="close-modal" onClick={toggleModal}>CLOSE</button>
                    </div>
                </div>
            </div>
        </>
    );

}