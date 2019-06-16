import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CounterPage from "./pages/CounterPage";
import BreathRecord from "./pages/BreathRecord";

export default () => {
    return (
        <Switch>
            <Route exact path={'/'} component={CounterPage}/>
            <Route exact path={'/record'} component={BreathRecord}/>
        </Switch>
    )
}