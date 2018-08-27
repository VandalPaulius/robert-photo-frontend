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
            setFormRef: formRef => this.setState({ formRef }),
        };
    }

    renderFakeReCaptcha({ onSolved }) {
        return (
            <div
                style={{
                    background: '#c4c4c4',
                    minWidth: '200px',
                    minHeight: '50px',
                }}
            >
                <button
                    type="button"
                    onClick={() => setTimeout(() => onSolved(), 50)}
                >
                    Solve
                </button>
            </div>
        );
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
                    <input ref={this.actions.setFormRef} />
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    caption: PropTypes.string,
};

Contact.defaultProps = {
    caption: '',
};

export default Contact;
