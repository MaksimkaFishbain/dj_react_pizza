import React from 'react';

const Modal = ({isOpened, setIsOpened, modalContent}) => {
    return (
        <div className={isOpened ? "modal" : "modal.active"} onClick={() => setIsOpened(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h3><u>Рецепт</u></h3>
                <p>{modalContent}</p>
                <p></p>
            </div>
        </div>
    );
};

export default Modal;