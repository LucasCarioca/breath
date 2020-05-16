import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CounterPage from "./pages/Counter";
import BreathRecord from "./pages/BreathRecord";
import Account from "./pages/Account";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermOfService';

export default () => {
    return (
        <Switch>
            <Route exact path={'/'} component={CounterPage}/>
            <Route exact path={'/record'} component={BreathRecord}/>
            <Route exact path={'/account'} component={Account}/>
            <Route exact path={'/privacypolicy'} component={PrivacyPolicy}/>
            <Route exact path={'/termsofservice'} component={TermsOfService}/>
        </Switch>
    )
}