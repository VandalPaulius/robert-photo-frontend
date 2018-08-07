import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
                <div>
                    Menu
                </div>
                <div>
                    <Router>
                        <div>
                            <Route exact path="/" component={Gallery} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
