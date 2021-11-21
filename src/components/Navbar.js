import React from 'react';
import {Link, NavLink, withRouter} from "react-router-dom";

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push("/about");
    // }, 2000);
    return (
        <div>
            <nav>
                <a>RouterApp</a>
                <ul>
                    {/*with anchor tag we will always request the server for index.html, we don't want that we are building a SPA*/}
                    {/*<li><a href="/">Home</a></li>*/}

                    {/*with NavLink we will get a class of "active" value to the a tag*/}
                    {/*<li><NavLink to="/">Home</NavLink></li>*/}

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default withRouter(Navbar);
