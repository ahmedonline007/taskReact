import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./component/login'));
const DashBoard = lazy(() => import('./component/dashBoard'));


const rout = (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/DashBoard" component={DashBoard} />
        </Switch>
    </Suspense>
);


export default rout;

