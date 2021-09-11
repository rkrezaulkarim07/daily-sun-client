import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './Config';
import { Box } from '@material-ui/core';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DetailView from './components/Details/DetailView';
import CreatePost from './components/Create/CreatePost';
import Update from './components/Create/Update';
import Login from './components/Account/Login';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {

    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    const customAuthHandler = () => {
        history.push('/login');
    };
    
    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <SecureRoute path='/' component={Header} />
            <Box style={{ marginTop: 64 }}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    
                    <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                    
                    <Route exact path='/details/:id' component={DetailView} />
                    <Route exact path='/create/:category?' component={CreatePost} />
                    <Route exact path='/update/:id' component={Update} />
                </Switch>
            </Box>
        </Security >
    )
}

export default AppWithRouterAccess;