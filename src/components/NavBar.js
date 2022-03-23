import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return(
        <div>
            <nav id="nav-main">
                <ul>
                    <li>
                        <NavLink to="/">Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About<br></br></NavLink>
                    </li>
                    <li>
                        <NavLink to="projects">Projects </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}