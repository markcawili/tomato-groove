import "../styles/Modal.css";
import CloseIcon from '@mui/icons-material/Close';

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
                        <CloseIcon className="close-modal-btn" onClick={toggleModal}/>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    );

}