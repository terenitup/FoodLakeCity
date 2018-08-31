import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Blog from './blog';
import Gallery from './gallery';

export default function() {
    return (
        <div>   
            <Switch>
                <Route exact path="/" component ={Home} />
                <Route exact path="/blogs" component ={Blog} />
                <Route exact path="/gallery" component ={Gallery} />
            </Switch>
        </div>
    );
}