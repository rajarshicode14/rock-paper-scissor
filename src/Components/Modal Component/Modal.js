import "./Modal.css";

import rules from "../../images/image-rules.svg";
import close from "../../images/icon-close.svg";


function Modal({setOpenModal}){

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <h2>RULES</h2>
                    <img src={close} alt="close" onClick={() => {setOpenModal(false)}}/>
                </div>
                <div className="modal-body">
                    <img src={rules} alt="rules" />
                </div>
            </div>
        </div>
    );
}

export default Modal;