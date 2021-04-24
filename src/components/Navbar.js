import React from 'react'
import {Link, NavLink} from 'react-router-dom';
export default function Navbar() {
    const myStyle = {
        active: {
            color: 'red'
        }
    }
    return (
        <div>
            <header>
                <nav>
                    <a href="#s">Logo</a>
                    <ul>
                        <li><NavLink activeStyle={{color: 'red'}} to="/sign-in">Log In</NavLink></li>
                        <li><NavLink activeStyle={{color: 'red'}} to="/sign-up">Sign Up</NavLink></li>
                        <li><NavLink activeStyle={{color: 'red'}} to="/users-list">Users List</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
