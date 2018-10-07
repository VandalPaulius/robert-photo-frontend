import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu, Header, LoadingIcon } from 'components';
import styles from './styles.scss';
import { Gallery, About, Contact } from './components';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {},
            loaded: false,
            menuOpen: false,
        };

        this.actions = this.initActions();
    }

    // eslint-disable-next-line react/sort-comp
    initActions() {
        return {
            toggleMenuOpen: menuOpen => this.setState({ menuOpen }),
            loadConfig: () => {
                setTimeout(() => {
                    this.setState({
                        loaded: true,
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
                            instagramUrl: 'https://www.instagram.com/ridebmx/?hl=en',
                            contact: {
                                contactCaption: 'Fancy a chat?',
                                messagePlaceholder: 'Hi, ...',
                                emailPlaceholder: 'Email',
                            },
                            gallery: {
                                pictures: [{
                                    id: 'dsfdsfdhfghfgjhfghfgh',
                                    name: 'Autumn road',
                                    url: 'http://coolwallpaper.website/wp-content/uploads/2018/03/nature-background-images-for-photoshop-unique-1836-road-hd-wallpapers-background-images-wallpaper-abyss-of-nature-background-images-for-photoshop.jpg',
                                    sizes: [{
                                        name: '16 x 15',
                                        price: '£25',
                                        id: 'as45as566dasdda798sa7d987fg',
                                    }, {
                                        name: '16 x 7',
                                        price: '£13',
                                        id: 'as45as566assadasd45465dasddfg',
                                    }, {
                                        name: '50cm x 71,3cm',
                                        price: '£6953',
                                        id: 'as45as566dasddf456afds5sd641ag',
                                    }],
                                }, {
                                    id: 'dsfdsfdhfghfgjhfgh4656546fgh',
                                    name: '1980 Porsche 911 SC Targa',
                                    url: 'https://i.ytimg.com/vi/og4k9JPsA_g/maxresdefault.jpg',
                                    sizes: [{
                                        name: '16 x 15',
                                        price: '£25',
                                        id: 'as45as566dasd54saddfg',
                                    }, {
                                        name: '16 x 7',
                                        price: '£13',
                                        id: 'as45as56sa4d4aasd6dasddfg',
                                    }, {
                                        name: '50cm x 71,3cm',
                                        price: '£6953',
                                        id: 'as45as566das74978ddfg',
                                    }],
                                }, {
                                    id: 'dsfdsfd878dsfhfghfgjhfghfgh',
                                    name: 'Anime girl',
                                    url: 'https://i.pinimg.com/originals/58/92/e7/5892e7f3cc64c8a912e2494a3ff77e08.jpg',
                                    sizes: [{
                                        name: '16 x 15',
                                        price: '£25',
                                        id: 'as45as566dasddfg',
                                    }, {
                                        name: '16 x 7',
                                        price: '£13',
                                        id: 'asdassdf452121011ddfg',
                                    }, {
                                        name: '50cm x 71,3cm',
                                        price: '£6953',
                                        id: 'asdasddfsd4f65g',
                                    }],
                                }, {
                                    id: 'dsfdsfdsdf4sd65fhfghfgjhfghfgh',
                                    name: 'Himari',
                                    url: 'https://vignette.wikia.nocookie.net/omamori-himari/images/1/10/007.jpg/revision/latest?cb=20120507105337',
                                    sizes: [{
                                        name: '16 x 15',
                                        price: '£25',
                                        id: 'asdasdd4sf6dfg',
                                    }, {
                                        name: '50cm x 71,3cm',
                                        price: '£6953',
                                        id: 'asdasdd5sdf66fg',
                                    }],
                                }, {
                                    id: 'dsfdsfdhfghdsf4sd65fgjhfghfgh',
                                    name: 'Mirrors Edge Catalyst',
                                    url: 'https://gpstatic.com/acache/30/32/1/uk/s7-949b4aa41fa9c297522b46ddfbe2c3da.jpg',
                                    sizes: [{
                                        name: '50cm x 71,3cm',
                                        price: '£6953',
                                        id: 'asdasddfgsdf8965',
                                    }],
                                }, {
                                    id: 'dsfdsfdhf5ds6f4484684adasghfgjhfghfgh',
                                    name: 'Beyond Good and Evil 2 Pey\'j',
                                    url: 'https://drdw8nfjvtevv.cloudfront.net/wp-content/uploads/2018/06/35144684_10155334422642143_1141390934756294656_n.jpg',
                                    sizes: [{
                                        name: '16 x 15',
                                        price: '£25',
                                        id: 'asdasddfg',
                                    }, {
                                        name: '16 x 7',
                                        price: '£13',
                                        id: 'asdas46sdfsddfg',
                                    }, {
                                        name: '50cm x 71,3cm',
                                        price: '£6953',
                                        id: 'asdasdd54654fg',
                                    }],
                                }],
                                getPrintedButtonName: 'Get Printed',
                                orderPrintButtonContent: 'Send Enquiry',
                                orderMessagePlaceholder: 'Hi, my address is...',
                                orderEmailPlaceholder: 'Email',
                            },
                        },
                    });
                }, 100);
            },
        };
    }

    componentDidMount() {
        this.actions.loadConfig();
    }

    renderRoutes() {
        return (
            <div className={styles.routes}>
                <Route
                    exact
                    path="/"
                    component={() => (
                        <Gallery
                            pictures={this.state.config.gallery.pictures}
                            getPrintedButtonName={this.state.config.gallery.getPrintedButtonName}
                            orderPrintButtonContent={this.state.config.gallery.orderPrintButtonContent}
                            orderEmailPlaceholder={this.state.config.gallery.orderEmailPlaceholder}
                            orderMessagePlaceholder={this.state.config.gallery.orderMessagePlaceholder}
                        />
                    )}
                />
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
                        <Contact
                            caption={this.state.config.contactCaption}
                            emailPlaceholder={this.state.config.contact.emailPlaceholder}
                            messagePlaceholder={this.state.config.contact.messagePlaceholder}
                        />
                    )}
                />
            </div>
        );
    }

    render() {
        return (
            <Router>
                <div className={styles.app}>
                    {this.state.loaded ? (
                        <React.Fragment>
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
                                        instagramUrl={this.state.config.instagramUrl}
                                    />
                                </div>
                                {this.renderRoutes()}
                            </div>
                            {this.state.config.copyrightNote && (
                                <div className={styles.copyrightNote}>
                                    <div className={styles.text}>
                                        {this.state.config.copyrightNote}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ) : (
                        <div className={styles.loader}>
                            <LoadingIcon
                                className={styles.loadingIcon}
                            />
                        </div>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
