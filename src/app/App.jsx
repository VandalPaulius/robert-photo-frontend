import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './styles.scss';
import { Gallery, About, Contact } from './views';
import { Menu } from 'components';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {
                websiteName: 'Robert Photo',
            },
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
            <Router>
                <div className={styles.app}>
                    <div>
                        <Menu
                            websiteName={this.state.config.websiteName}
                        />
                    </div>
                    <div>
                        <Route exact path="/" component={Gallery} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </Router>
        );
    }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
