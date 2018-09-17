import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function CloseIcon(props) {
    return (
        <svg
            className={`${styles.closeIcon} ${props.className}`}
            style={{
                fill: props.style.color,
                stroke: props.style.color,
                enableBackground: 'new 0 0 50 50',
                ...props.styles,
            }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
        >
            <path d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z" />
        </svg>
    );
}

CloseIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({
        color: PropTypes.string,
    }),
};

CloseIcon.defaultProps = {
    className: '',
    style: {},
};

export default CloseIcon;
