import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from "./App"
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/signup" component={SignUpScreen}/>
                <Route path="/login" component={LoginScreen}/>
            </Switch>
        </Router>
    )
}

export default Routes
