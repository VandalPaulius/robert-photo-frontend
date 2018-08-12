import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Header(props) {
    return (
        <div
            className={`${styles.header} ${props.menuOpen ? styles.neighbourOpen : ''}`}
            tabIndex="0"
            role="button"
            onClick={() => {
                if (props.menuOpen) {
                    props.toggleMenu(false);
                } else {
                    props.toggleMenu(true);
                }
            }}
            onMouseEnter={props.onMouseEnter}
        >
            <div className={styles.websiteName}>
                {props.websiteName}
            </div>
            <div className={styles.openCloseIconContainer}>
                <div className={styles.icon}>
                    {props.menuOpen ? 'Close' : 'Open'}
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    websiteName: PropTypes.string,
    menuOpen: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func,
};

Header.defaultProps = {
    websiteName: '',
    menuOpen: false,
    onMouseEnter: () => {},
};

export default Header;
