import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
        <div>
            <div> 
                <NavLink exact to="/">
                    Home
                </NavLink>
            </div>

            <div> 
                <NavLink to="/blog">
                    Blog
                </NavLink>
            </div>

            <div> 
                <NavLink to="/gallery">
                    Gallery
                </NavLink>
            </div>
        </div>
    );
}