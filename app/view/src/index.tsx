import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    HashRouter as Router,
    Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import MainFlow from '../pages/MainFlow/MainFlow';
import NormalLoginForm from '../pages/Login/Login';
import RegisterForm from '../pages/Register/RegisterForm';
import { createHashHistory } from 'history';
import SelectPage from '../pages/SelectPage/SlectPage';
if ((module as any).hot) {
    (module as any).hot.accept();
}
ReactDOM.render(
    <Router>
        <>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/main" />}></Route>
                <Route path="/main" component={MainFlow}></Route>
                <Route path="/login" component={NormalLoginForm}></Route>
                <Route path="/register" component={RegisterForm}></Route>
                <Route path="/home" component={SelectPage}></Route>
            </Switch>
        </>
    </Router>,
    document.getElementById('root')
);
