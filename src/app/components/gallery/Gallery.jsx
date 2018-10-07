import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from './components';
import styles from './styles.scss';

function Gallery(props) {
    return (
        <div className={styles.gallery}>
            <div className={styles.content}>
                {props.pictures.map(picture => (
                    <Picture
                        picture={picture}
                        key={picture.id}
                        getPrintedButtonName={props.getPrintedButtonName}
                        orderPrintButtonContent={props.orderPrintButtonContent}
                        orderEmailPlaceholder={props.orderEmailPlaceholder}
                        orderMessagePlaceholder={props.orderMessagePlaceholder}
                    />
                ))}
            </div>
        </div>
    );
}

Gallery.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        sizes: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.string,
            id: PropTypes.string,
        })),
    })),
    getPrintedButtonName: PropTypes.string,
    orderPrintButtonContent: PropTypes.string,
    orderMessagePlaceholder: PropTypes.string,
    orderEmailPlaceholder: PropTypes.string,
};

Gallery.defaultProps = {
    pictures: [],
    getPrintedButtonName: '',
    orderPrintButtonContent: '',
    orderMessagePlaceholder: '',
    orderEmailPlaceholder: '',
};

export default Gallery;
