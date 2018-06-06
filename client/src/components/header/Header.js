import React, { Component } from "react";
import './Header.css';
class Header extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control ml-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"/>
                <button 
                    className="btn btn-outline-light my-2 my-sm-0" 
                    type="submit">
                    Search
                </button>
                </form>
                <div className="navbar-header">
                    <h3>memequeen</h3>
                </div>
            </nav>
        </div>
    }
}

export default Header;