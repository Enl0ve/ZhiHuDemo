import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes/index';
import Navbar from './layouts/Nav';
import LoginContainer from './views/Login'
import Check from './components/Check'
import Login from './components/Home/Login'
import LogoPureComponent from './Logo'
import ReactSVG from 'react-svg'
import LoginByAccount from './components/Home/LoginByAccount'
import AppHeader from './components/Home/AppHeader'
import ContentLeftTabs from './components/Home/ContentLeft'
import Content from './components/Home/Content'

import {BrowserRouter, Route, Link} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login}></Route>
            <Route path="/content" component={Content}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);