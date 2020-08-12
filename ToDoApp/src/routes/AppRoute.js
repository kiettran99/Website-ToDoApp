import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import TodosList from '../components/TodosList';
import CreateTodo from '../components/CreateTodo';
import EditTodo from '../components/EditTodo';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" component={TodosList} exact={true} />
                    <Route path="/create" component={CreateTodo} />
                    <Route path="/edit/:id" component={EditTodo} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRoute;