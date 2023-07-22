import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleAddRemoveFavorite = (item) => {
    if (store.favs.some((fav) => fav.uid === item.uid)) {
      // Item is already in favorites, so remove it
      actions.addRemoveFav(item);
    } else {
      // Item is not in favorites, so add it
      actions.addRemoveFav(item);
    }
  };

  const handleDeleteFav = (e, uid) => {
    e.stopPropagation();
    actions.deleteFav(uid);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3" id="navBar">
      <Link to="/">
        <div>
          <FontAwesomeIcon icon={faJedi} id="starwarsIcon" />
        </div>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
          {store.favs && store.favs.length > 0 ? (
            store.favs.map((favUid) => (
              <li key={`fav-${favUid}`}>
                <span>{favUid}</span>
                <button className="btn btn-danger" onClick={(e) => handleDeleteFav(e, favUid)}>X</button>
              </li>
            ))
          ) : (
            <li className="empty-favorites">You don't have any favorites</li>
          )}
        </ul>
        </div>
      </div>
    </nav>
  );
};
