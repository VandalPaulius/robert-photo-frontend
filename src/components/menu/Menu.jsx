import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './styles.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
        this.actions = this.initActions();
    }

    initActions() {
        return {
            toggleOpen: open => this.setState({ open }),
        };
    }

    renderHeader() {
        return (
            <div className={`${styles.header} ${this.state.open ? styles.neighbourOpen : ''}`}>
                <div className={styles.websiteName}>
                    {this.props.websiteName}
                </div>
                <div className={styles.openCloseIconContainer}>
                    <div className={styles.icon}>
                        {this.state.open ? 'Close' : 'Open'}
                    </div>
                </div>
            </div>
        );
    }

    renderMenuList() {
        return (
            <div className={`${styles.menuList} ${this.state.open ? styles.open : ''}`}>
                <div>
                    <Link to="/">
                        <div className={styles.item}>Gallery</div>
                    </Link>
                </div>
                <div>
                    <Link to="/about">
                        <div className={styles.item}>About</div>
                    </Link>
                </div>
                <div>
                    <Link to="/contact">
                        <div className={styles.item}>Contact</div>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div
                className={styles.menu}
                role="button"
                tabIndex="0"
                onClick={() => {
                    if (this.state.open) {
                        this.actions.toggleOpen(false)
                    } else {
                        this.actions.toggleOpen(true);
                    }
                }}
                onBlur={() => this.actions.toggleOpen(false)}
            >
                {this.renderHeader()}
                {this.renderMenuList()}
            </div>
        );
    }
}

Menu.propTypes = {
    websiteName: PropTypes.string,
};

Menu.defaultProps = {
    websiteName: '',
};

export default Menu;
