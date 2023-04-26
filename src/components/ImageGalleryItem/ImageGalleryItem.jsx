import { Image } from './ImageGalleryItem.styled';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt }) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(!open);
    };
    return (
        <>
            <Image src={url} alt={alt} onClick={openModal} />
            {open && (
                <Modal onClose={openModal} url={url} alt={alt} />
            )}
        </>
    );
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
