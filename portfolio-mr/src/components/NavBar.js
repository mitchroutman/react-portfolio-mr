import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return(
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}