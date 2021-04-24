import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from "./containers/Auth/SignUp";
import SignIn from "./containers/Auth/SignIn";
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import UsersList from './components/UsersList';



ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/users-list" component={UsersList} />
            <Route path="*" component={ErrorPage} />
        </Switch>
        
    </BrowserRouter>
    ,
    document.getElementById('root')
);
