import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//路由配置文件

import Home from '../views/Home';
import Detail from '../views/Detail';
import Navbar from '../layouts/Nav'

const routes = (
    <Router>
        <div className="Route">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/detail">Detail</Link></li>
            </ul>
            {/* <Navbar /> */}
            <hr/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
        </div>   
    </Router>
);


export default routes;