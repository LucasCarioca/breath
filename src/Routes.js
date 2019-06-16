import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CounterPage from "./pages/Counter";
import BreathRecord from "./pages/BreathRecord";
import Account from "./pages/Account";

export default () => {
    return (
        <Switch>
            <Route exact path={'/'} component={CounterPage}/>
            <Route exact path={'/record'} component={BreathRecord}/>
            <Route exact path={'/account'} component={Account}/>
        </Switch>
    )
}