import { Component } from "react";
import { NavLink } from "react-router-dom";



class Header extends Component {
    render() {
        return (
            <header >
                <nav >
                    <NavLink
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                    >
                        Movies
                    </NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;