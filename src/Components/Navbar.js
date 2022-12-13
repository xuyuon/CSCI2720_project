import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Navbar extends Component {

    render() {
        return (
		    	<nav className="navbar navbar-dark bg-primary vh-100 sticky-top">
		    		<ul className="navbar-nav">
						<div className="navbar-brand my-3 text-center">
							<h3>CSCI2720</h3>
  						</div>
						<div className="px-4">
		    				<li className="navbar-item my-3">
		    					<Link className="nav-link" to={"/dashboard/location"}><h5><i className="bi bi-map-fill"></i>&nbsp;Location</h5></Link>
		    				</li>
		    				<li className="navbar-item my-3">
		    					<Link className="nav-link" to={"/dashboard/favourite"}><h5><i className="bi bi-heart-fill"></i>&nbsp;Favourite</h5></Link>
		    				</li>
							<li className="navbar-item my-3">
		    					<Link className="nav-link" to={"/dashboard/user"}><h5><i className="bi bi-people-fill"></i>&nbsp;User Data</h5></Link>
		    				</li>
							<li className="navbar-item my-3">
		    					<Link className="nav-link" to={"/dashboard/place"}><h5><i className="bi bi-geo-alt-fill"></i>&nbsp;Place Data</h5></Link>
		    				</li>
						</div>
		    		</ul>
					<div className="text-center w-100">
							<button type="button" className="btn btn-secondary">LOG OUT</button>
					</div>
		    	</nav>
        );
    }
}

export default Navbar;