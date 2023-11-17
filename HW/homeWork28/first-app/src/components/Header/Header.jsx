import React from 'react';
import logo from '../../logo.svg';
import './Header.scss';

function Header(props) {
    return (
        <header>
            <div>
                <a className="logo">
                    <img src={logo} alt="logo"/>
                </a>
                <p>My Website</p>
                <nav>
                    <div>
                        <ul className="nav_list">
                            <li>
                                <a href="#">Categories</a>
                            </li>
                        <li>
                                <a href="#">Products</a>
                            </li>
                        <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;