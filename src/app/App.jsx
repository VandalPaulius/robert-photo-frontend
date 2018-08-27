import React from 'react';
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
                aboutMe: [{
                    id: 'asdasd',
                    image: true,
                    alt: 'Fabulous Rob',
                    url: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/26805064_10215337302006544_272682501393385032_n.jpg?_nc_cat=0&oh=787c47aa5cfa28f1b779fb828030c984&oe=5C02BFE3',
                }, {
                    id: 'ds4fsd6f4sd',
                    text: true,
                    heading: true,
                    content: 'Lorem Ipsum',
                }, {
                    id: '6ds5fsdf56ad',
                    text: true,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                }, {
                    id: '56dsf4sd6f465484dsf565',
                    image: true,
                    alt: 'More of him',
                    url: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/17156214_10212262683222996_3831772522503633545_n.jpg?_nc_cat=0&oh=8de33e8b224c176a85f96298bddbc35e&oe=5C00B928',
                }, {
                    id: 'sdfsd989223a',
                    text: true,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                }],
                copyrightNote: 'Robert Arthur Photography ©',
                contactCaption: 'Fancy a chat?',
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
                    <div className={styles.headerContainer}>
                        <Header
                            menuOpen={this.state.menuOpen}
                            websiteName={this.state.config.websiteName}
                            toggleMenu={this.actions.toggleMenuOpen}
                            onMouseEnter={() => this.actions.toggleMenuOpen(true)}
                        />
                    </div>
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
                            <Route
                                path="/about"
                                component={() => (
                                    <About
                                        description={this.state.config.aboutMe}
                                    />
                                )}
                            />
                            <Route
                                path="/contact"
                                component={() => (
                                    <Contact caption={this.state.config.contactCaption} />
                                )}
                            />
                        </div>
                    </div>
                    {this.state.config.copyrightNote && (
                        <div className={styles.copyrightNote}>
                            <div className={styles.text}>
                                {this.state.config.copyrightNote}
                            </div>
                        </div>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
