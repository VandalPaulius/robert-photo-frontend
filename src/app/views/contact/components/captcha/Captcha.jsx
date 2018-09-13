import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Captcha(props) {

    return (
        <div className={`${props.className} ${styles.captcha}`}>
            <div className={styles.question}>
                Are you a human?
            </div>
            <div className={styles.buttonContainer}>
                <div
                    className={styles.button}
                    onClick={() => setTimeout(() => props.onSolved(), 100)}
                    role="button"
                    tabIndex={0}
                >
                    <div className={styles.content}>
                        <div className={props.solved ? styles.hide : ''}>
                            Yup
                        </div>
                        <div className={`${styles.iconContainer} ${props.solved ? '' : styles.hide}`}>
                            <svg
                                className={styles.checkMarkIcon}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.button} ${styles.separator}`}
                    role="button"
                    tabIndex={0}
                >
                    Nope
                </div>
            </div>
        </div>
    );
}

Captcha.propTypes = {
    onSolved: PropTypes.func,
    className: PropTypes.string,
    solved: PropTypes.bool,
};

Captcha.defaultProps = {
    onSolved: () => {},
    className: '',
    solved: false,
};

export default Captcha;
