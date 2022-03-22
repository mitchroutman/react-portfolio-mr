import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function NavBar() {
    return(
        <div>
            <nav>
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
            </nav>
        </div>
    );
}