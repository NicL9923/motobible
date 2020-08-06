import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/motoBibleLogo.png';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            navMenuHidden: document.documentElement.clientWidth < 600
        }
    }
    
    showMenu = event => {
        this.setState({ navMenuHidden: !this.state.navMenuHidden });
        event.preventDefault();
    }

    render() {
        return(
            <nav>
                <img className="navLogo" src={logo} width="45" height="45" alt="TheMotoBible.com"/>

                <div className="navLeft" style={this.state.navMenuHidden ? { display: "none"} : { display: "flex" }}>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/chatroom">Chatroom</Link>
                    <Link to="/minigames">Minigames</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="navRight" style={this.state.navMenuHidden ? { display: "none"} : { display: "flex" }}>
                    {this.props.user ? (<Link to="/logout">Logout</Link>) : (<><Link to="/login">Login</Link>
                    <Link to="/register">Register</Link></>)}
                    <Link to="/donate"><button className="supportUsBn">Support Us</button></Link>
                </div>

                <i class="navMenu fa fa-bars fa-2x" aria-hidden="false" onClick={this.showMenu}></i>
            </nav>
        );
    }
}

export default Navbar;