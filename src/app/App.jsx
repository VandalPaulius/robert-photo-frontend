import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu, Header } from 'components';
import styles from './styles.scss';
import { Gallery, About, Contact } from './views';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {
                websiteName: 'Robert Photo',
            },
            menuOpen: false,
        };

        this.actions = this.initActions();
    }

    // eslint-disable-next-line react/sort-comp
    initActions() {
        return {
            toggleMenuOpen: menuOpen => this.setState({ menuOpen }),
        };
    }

    render() {
        return (
            <Router>
                <div className={styles.app}>
                    <Header
                        menuOpen={this.state.menuOpen}
                        websiteName={this.state.config.websiteName}
                        toggleMenu={this.actions.toggleMenuOpen}
                        onMouseEnter={() => this.actions.toggleMenuOpen(true)}
                    />
                    <div className={styles.content}>
                        <div
                            className={styles.menu}
                            onBlur={() => this.actions.toggleMenuOpen(false)}
                        >
                            <Menu
                                open={this.state.menuOpen}
                                toggleOpen={this.actions.toggleMenuOpen}
                                onMouseLeave={() => this.actions.toggleMenuOpen(false)}
                            />
                        </div>
                        <div className={styles.routes}>
                            <Route exact path="/" component={Gallery} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </div>
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
