import React from 'react';
import './LeftNav.scss';

function LeftNav(props) {
    return (
        <nav className="left-nav">
            <a href="#">HomePage</a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
        </nav>
    );
}

export default LeftNav;