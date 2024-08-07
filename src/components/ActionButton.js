import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState} from "react";
import '../styles/ActionButton.css'
import {useDataLayerValue} from "./DataLayer";

function ActionButton({side}) {

    const [isComponentOpen, setIsComponentOpen] = useState(true);
    const [{token}] = useDataLayerValue();

    const closeComponent = () => {
        setIsComponentOpen(false);

        if (side === 'right') {
            let div = document.getElementsByClassName("utility-body");

            div[0].classList.remove("open-transition-body");
            div[0].classList.add("close-transition-body");
        } else {
            let div = document.getElementsByClassName("list-div");

            div[0].classList.remove("open-transition-list");
            div[0].classList.add("close-transition-list");
        }

    }

    const openComponent = () => {
        setIsComponentOpen(true);

        if (side === 'right') {
            let div = document.getElementsByClassName("utility-body");

            div[0].classList.remove("close-transition-body");
            div[0].classList.add("open-transition-body");
        } else {
            let div = document.getElementsByClassName("list-div");

            div[0].classList.remove("close-transition-list");
            div[0].classList.add("open-transition-list");
        }
    }

    return (
        <div className="arrow-icon">
            {side === 'right' ?
                <div>
                    {token ?
                        (isComponentOpen ?
                        (<KeyboardArrowRightIcon className="close-player" fontSize="large" onClick={closeComponent} />)
                        :
                        (<KeyboardArrowLeftIcon className="open-player" fontSize="large" onClick={openComponent} />))
                        : null}
                </div>
                :
                <div>
                    {isComponentOpen ?
                    (<KeyboardArrowLeftIcon className="close-player" fontSize="large" onClick={closeComponent} />)
                    :
                    (<KeyboardArrowRightIcon className="open-player" fontSize="large" onClick={openComponent} />)}
                </div>}
        </div>
    )
}

export default ActionButton;