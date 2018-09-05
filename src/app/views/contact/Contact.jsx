import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formRef: null,
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
            sendMessage: () => {

            }
        };
    }

    // renderFakeReCaptcha({ onSolved }) {
    //     return (
    //         <div
    //             style={{
    //                 background: '#c4c4c4',
    //                 minWidth: '200px',
    //                 minHeight: '50px',
    //             }}
    //         >
    //             <button
    //                 type="button"
    //                 onClick={() => setTimeout(() => onSolved(), 50)}
    //             >
    //                 Solve
    //             </button>
    //         </div>
    //     );
    // }

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
                    />
                    <textarea
                        className={styles.input}
                        ref={ref => this.actions.setRef(ref, 'messageInputRef')}
                        placeholder={this.props.placeholder}
                    />
                    {/* {this.renderFakeReCaptcha()} */}
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
