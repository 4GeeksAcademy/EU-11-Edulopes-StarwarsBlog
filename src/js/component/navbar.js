import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleAddRemoveFavorite = (item) => {
    if (store.favs.some((fav) => fav.uid === item.uid)) {
      actions.addRemoveFav(item);
    } else {
      actions.addRemoveFav(item);
    }
  };

  const handleDeleteFav = (e, uid) => {
    e.stopPropagation();
    actions.addRemoveFav(uid);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3" id="navBar">
      <Link to="/">
        <div>
          <FontAwesomeIcon icon={faJedi} id="starwarsIcon" />
        </div>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul
            className="dropdown-menu dropdown-menu-right"
            onClick={(e) => e.stopPropagation()}
          >
            {store.favs && store.favs.length > 0 ? (
  <ul className="favorites-list">
    {store.favs.map((fav) => (
      <li key={`fav-${fav.uid}`}>
        <div className="favorite-item">
          <span>{fav.name}</span>
          <button
            className="btn btn-danger dropdown-item"
            onClick={(e) => handleDeleteFav(e, fav)}
          >
            X
          </button>
        </div>
      </li>
    ))}
  </ul>
) : (
  <li className="empty-favorites">You don't have any favorites</li>
)}
          </ul>
        </div>
      </div>
    </nav>
  );
};
