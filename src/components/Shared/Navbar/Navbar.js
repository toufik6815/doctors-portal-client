import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link mr-5" to="/">Home</Link>
                </li>

                <li className="nav-item">
                     <Link className="nav-link mr-5" to="/login" style={{color: '#1CC7C1'}}>Login</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-5" to="/dashboard" style={{color: '#1CC7C1'}}>Dashboard</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link mr-5" to="/dashboard" style={{color: '#1CC7C1'}}>Admin</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-5" to="#" style={{color: '#1CC7C1'}}>Blogs</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mr-5" to="#" style={{color: '#1CC7C1'}}>Contact Us</Link>
                </li>
                </ul>
        </div>
    </nav>
    );
};

export default Navbar;