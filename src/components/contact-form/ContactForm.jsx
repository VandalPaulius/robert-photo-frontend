import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Captcha, SendButton } from './components';

const initialState = {
    emailInputRef: null,
    messageInputRef: null,
    errors: {},
    sendStatus: 'idle',
    captchaSolved: false,
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...initialState };

        this.actions = this.initActions();
        
        this.actions.updateSendStatus = this.actions.updateSendStatus.bind(this);
        this.actions.updateSendError = this.actions.updateSendError.bind(this);
        this.actions.resetState = this.actions.resetState.bind(this);
    }

    // eslint-disable-next-line react/sort-comp
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
            updateSendError: error => this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    send: error,
                },
            })),
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

                    if (this.props.messageRequired && !message.message) {
                        errors.message = 'Message is empty';
                        valid = false;
                    }

                    if (this.props.useCaptcha && !this.state.captchaSolved) {
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
                    this.actions.updateSendStatus('sending');
                    this.props.onFormFillSuccess({
                        data: {
                            email: this.state.emailInputRef.value,
                            message: this.state.messageInputRef.value,
                        },
                        onSuccess: () => this.actions.updateSendStatus('sent'),
                        onError: (error) => {
                            this.actions.updateSendError(error);
                            this.actions.updateSendStatus('idle');
                        },
                        resetStateCallback: this.actions.resetState,
                    });
                } else {
                    this.props.onFormFillError();
                }
            },
            updateCaptchaStatus: (captchaSolved) => {
                this.setState({ captchaSolved });
            },
            resetState: () => {
                this.state.emailInputRef.value = '';
                this.state.messageInputRef.value = '';
                this.state = {};
                this.setState({ ...initialState });
            },
        };
    }

    getSendButtonStatus() {
        if (this.state.sendStatus === 'sending') {
            return 'loading';
        }
        if (this.state.sendStatus === 'sent') {
            return 'success';
        }

        return '';
    }

    render() {
        return (
            <div className={`${styles.contactForm} ${this.props.className}`}>
                {this.props.caption && (
                    <div className={styles.caption}>
                        {this.props.caption}
                    </div>
                )}
                <input
                    className={styles.input}
                    placeholder={this.props.emailPlaceholder}
                    ref={ref => this.actions.setRef(ref, 'emailInputRef')}
                    type="email"
                />
                <div className={styles.error}>
                    {this.state.errors.email}
                </div>
                <textarea
                    className={styles.input}
                    ref={ref => this.actions.setRef(ref, 'messageInputRef')}
                    placeholder={this.props.messagePlaceholder}
                />
                <div className={styles.error}>
                    {this.state.errors.message}
                </div>
                {this.props.useCaptcha && (
                    <React.Fragment>
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
                    </React.Fragment>
                )}
                <div className={styles.buttonContainer}>
                    <SendButton
                        onClick={this.actions.sendMessage}
                        status={this.getSendButtonStatus()}
                    >
                        {this.props.sendButtonContent}
                    </SendButton>
                </div>
                <div className={styles.error}>
                    {this.state.errors.send}
                </div>
            </div>
        );
    }
}

ContactForm.propTypes = {
    className: PropTypes.string,
    caption: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    messagePlaceholder: PropTypes.string,
    useCaptcha: PropTypes.bool,
    onFormFillSuccess: PropTypes.func,
    onFormFillError: PropTypes.func,
    sendButtonContent: PropTypes.string,
    messageRequired: PropTypes.bool,
};

ContactForm.defaultProps = {
    className: '',
    caption: '',
    emailPlaceholder: '',
    messagePlaceholder: '',
    useCaptcha: true,
    onFormFillSuccess: () => {},
    onFormFillError: () => {},
    sendButtonContent: 'Send',
    messageRequired: true,
};

export default ContactForm;
