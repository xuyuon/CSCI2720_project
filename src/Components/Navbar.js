import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Navbar extends Component {

    render() {
        return (
		    	<nav className="navbar navbar-dark bg-primary col-sm-2 vh-100 sticky-top d-flex justify-content-center">
		    		<ul className="navbar-nav vh-100">
						<div className="navbar-brand">
							<h3>CSCI2720</h3>
  						</div>
		    			<li className="nav-item">
		    				<Link className="nav-link" to={"/dashboard/location"}><h5>Location</h5></Link>
		    			</li>
		    			<li className="navbar-item">
		    				<Link className="nav-link" to={"/dashboard/favourite"}><h5>Favourite</h5></Link>
		    			</li>
		    		</ul>
		    	</nav>
        );
    }
}

export default Navbar;