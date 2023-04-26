import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ url, alt, onClose }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };
    const handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWindow>
                <img src={url} alt={alt} />
            </ModalWindow>
        </Overlay>,
        modalRoot
    );
};

Modal.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
