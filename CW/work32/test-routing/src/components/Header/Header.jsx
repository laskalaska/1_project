import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/info">About Us</Link>
                </li>
            </ul>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <NavLink to="/">Main</NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink to="/info">About Us</NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            {/* NavLink to add className = "active"*/}
        </header>
    );
}

export default Header;