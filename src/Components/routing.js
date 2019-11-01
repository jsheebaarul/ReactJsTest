import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Users from './displayUsers';
import Completed from './completedTodo';
import Posts from './posts';
import Comments from './viewComments';

function Routing() {
    return(
        <div>
            <switch>
                <Route path="/" component={Users} exact />
                <Route path="/displayUsers" component={Users}/>
                <Route path="/completedTodo" component={Completed}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/viewComments" component={Comments}/>
            </switch>
        </div>
    );
}
export default Routing;
