import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Captcha } from './components';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailInputRef: null,
            messageInputRef: null,
            errors: {},
            sendStatus: 'idle',
            captchaSolved: false,
        };

        this.actions = this.initActions();
    }

    initActions() {
        return {
            setRef: (ref, name) => {
                if (!this.state[name]) {
                    this.setState({ [name]: ref });
                }
            },
            updateSendStatus: (sendStatus) => {
                this.setState({ sendStatus });
            },
            sendMessage: () => {
                const isValid = (message) => {
                    let valid = true;
                    const errors = {
                        email: '',
                        message: '',
                    };

                    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(message.email.toLowerCase())) {
                        errors.email = 'Email is not valid';
                        valid = false;
                    }

                    if (!message.message) {
                        errors.message = 'Message is empty';
                        valid = false;
                    }

                    if (!this.state.captchaSolved) {
                        errors.captcha = 'Are you a human?';
                        valid = false;
                    }

                    this.setState({ errors });
                    return valid;
                };

                if (isValid({
                    email: this.state.emailInputRef.value,
                    message: this.state.messageInputRef.value,
                })) {
                    // fetch

                    this.actions.updateSendStatus('sending');
                    setTimeout(() => { // dev
                        this.actions.updateSendStatus('idle');

                        this.setState(prevState => ({
                            errors: {
                                ...prevState.errors,
                                send: 'Failed to send message',
                            },
                        }));
                    }, 500);
                }
            },
            updateCaptchaStatus: (captchaSolved) => {
                this.setState({ captchaSolved });
            },
        };
    }

    render() {
        return (
            <div className={styles.contact}>
                <div className={styles.content}>
                    {this.props.caption && (
                        <div className={styles.caption}>
                            {this.props.caption}
                        </div>
                    )}
                    <input
                        className={styles.input}
                        placeholder="Email"
                        ref={ref => this.actions.setRef(ref, 'emailInputRef')}
                        type="email"
                        defaultValue="asdasf@dsfsdf.lrfdg" // dev
                    />
                    <div className={styles.error}>
                        {this.state.errors.email}
                    </div>
                    <textarea
                        className={styles.input}
                        ref={ref => this.actions.setRef(ref, 'messageInputRef')}
                        placeholder={this.props.placeholder}
                        defaultValue="asdasf@dsfsdf.lrfdg" // dev
                    />
                    <div className={styles.error}>
                        {this.state.errors.message}
                    </div>
                    <div className={styles.captchaContainer}>
                        <Captcha
                            className={styles.captcha}
                            onSolved={() => this.actions.updateCaptchaStatus(true)}
                            solved={this.state.captchaSolved}
                        />
                    </div>
                    <div className={styles.error}>
                        {this.state.errors.captcha}
                    </div>
                    <div className={styles.buttonContainer}>
                        <div
                            className={styles.sendButton}
                            onClick={this.actions.sendMessage}
                            role="button"
                            tabIndex={0}
                        >
                            Send
                        </div>
                    </div>
                    <div className={styles.error}>
                        {this.state.errors.send}
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    caption: PropTypes.string,
    placeholder: PropTypes.string,
};

Contact.defaultProps = {
    caption: '',
    placeholder: '',
};

export default Contact;
