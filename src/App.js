import React from 'react';
import './App.css';
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import { Button, Card } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import AppStoreSVG from "./assets/appstore.svg"
import GooglePlayPNG from "./assets/google-play-badge.png"

const store = createStore(reducer, composeWithDevTools());

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
});

const paths = [
    '/',
    '/record',
    '/account'
];

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState(paths.indexOf(window.location.pathname));
    return (
        <Provider store={store}>
            <Router>
                <Box height={'100%'}>
                    <Container maxWidth={'sm'}>
                        <Routes />
                        <br />
                        <Card raised={true} className={'legal-links-card'}>
                            <CardContent>
                                <p>This web app is outdated. Please use one of our mobile options available through the links below.</p>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <a style={{margin: 'auto'}} href="https://apps.apple.com/us/app/count-my-breaths/id1513102381">
                                        <img style={{ height: '40px' }} src={AppStoreSVG} alt="Download on the Apple app store" />
                                    </a>
                                    <a style={{margin: 'auto'}} href="https://play.google.com/store/apps/details?id=net.lucasdesouza.countmybreaths">
                                        <img style={{ height: '60px' }} src={GooglePlayPNG} alt="Download on the Google Play store" />
                                    </a>
                                </div>
                                <p>Copyright &copy; 2020 Lucas Desouza</p>
                                <div className='legal-links-container'>
                                    <Button className='legal-links' component={Link} size={'small'} color={'secondary'}
                                        to='/privacypolicy'>Privacy policy</Button>
                                    <Button className='legal-links' component={Link} size={'small'} color={'secondary'}
                                        to='/termsofservice'>Terms of service</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <AppBar>
                            <BottomNavigation
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                showLabels
                                className={classes.root}
                            >
                                <BottomNavigationAction label="Counter" icon={<FavoriteIcon />} component={Link}
                                    to={'/'} />
                                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link}
                                    to={'/record'} />
                                <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} component={Link}
                                    to={'/account'} />
                            </BottomNavigation>
                        </AppBar>
                    </Container>
                </Box>
            </Router>
        </Provider>
    );
}

export default App;
