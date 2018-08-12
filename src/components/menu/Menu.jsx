import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import styles from './styles.scss';

function Menu (props) {
    const close = () => props.toggleOpen(false);

    return (
        <div
            className={`${styles.menu} ${props.open ? styles.open : ''}`}
            onMouseLeave={props.onMouseLeave}
        >
            <div>
                <Link
                    to="/" 
                    tabIndex="0"
                    role="button"
                    onClick={close}
                    className={
                        `${
                            styles.item
                        } ${
                            props.location.pathname === '/' ? styles.active : ''
                        }`
                    }
                >
                    Gallery
                </Link>
            </div>
            <div>
                <Link
                    to="/about"
                    tabIndex="0"
                    role="button"
                    onClick={close}
                    className={
                        `${
                            styles.item
                        } ${
                            props.location.pathname === '/about' ? styles.active : ''
                        }`
                    }
                >
                    About
                </Link>
            </div>
            <div>
                <Link
                    to="/contact"
                    tabIndex="0"
                    role="button"
                    onClick={close}
                    className={
                        `${
                            styles.item
                        } ${
                            props.location.pathname === '/contact' ? styles.active : ''
                        }`
                    }
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}

Menu.propTypes = {
    open: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
    onMouseLeave: PropTypes.func
};

Menu.defaultProps = {
    open: false,
    onMouseLeave: () => {},
};

export default withRouter(Menu);
