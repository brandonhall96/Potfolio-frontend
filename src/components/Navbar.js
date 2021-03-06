import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark " id='navbar1'>
            <div className="container" id="navbar2">
                <Link className="navbar-brand" id="navbarheader" to="/">Brandon Hall</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
                        </li>
                    </ul>
                    <a href="https://www.linkedin.com/in/brandon-hall-7b1014122/" class="fa fa-linkedin"></a>
                <a href="https://github.com/brandonhall96" class="fa fa-github"></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
