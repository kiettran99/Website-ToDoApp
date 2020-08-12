import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" target="_blank">
                <h1 className="text-info">ToDoApp</h1>
            </a>

            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>

            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Todo</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <br />
    </div>
);

export default Header;
