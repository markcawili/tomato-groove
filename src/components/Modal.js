import "../styles/Modal.css";

export default function Modal({isOpen, toggleModal, isBreak}) {

    let message = "Time for a break!"

    /*Will not render if it is open*/
    if (!isOpen) return null;

    if (!isBreak) {
        message = "Time for a a new session!"
    }

    return (
        <>
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <h2>TEST</h2>
                        <p>{message}</p>
                        <button className="close-modal" onClick={toggleModal}>CLOSE</button>
                    </div>
                </div>
            </div>
        </>
    );

}