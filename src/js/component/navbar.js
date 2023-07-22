import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" id="navBar">
			<Link to="/">
				<div>
					<FontAwesomeIcon icon={faJedi} id="starwarsIcon"/>
				</div>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">List</a></li>
					<li><a className="dropdown-item" href="#">Of</a></li>
					<li><a className="dropdown-item" href="#">My favorites</a></li>
				</ul>
			</div>
			</div>
		</nav>
	);
};
