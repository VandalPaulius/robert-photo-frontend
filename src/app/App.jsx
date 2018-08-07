import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Gallery, About, Contact } from './views';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.actions = this.initActions();
    }

    // eslint-disable-next-line react/sort-comp
    initActions() {
        return {
            

        };
    }

    render() {
        return (
            <div className={styles.app}>
                App
            </div>
        );
    }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
