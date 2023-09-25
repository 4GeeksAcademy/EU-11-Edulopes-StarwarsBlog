import "../../styles/home.css";
import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [likedItems, setLikedItems] = useState({});

  const handleAddRemoveFav = (item) => {
    const { uid } = item;
    const updatedLikedItems = { ...likedItems };
    if (updatedLikedItems[uid]) {
      delete updatedLikedItems[uid];
    } else {
      updatedLikedItems[uid] = item;
    }
    setLikedItems(updatedLikedItems);
    actions.addRemoveFav(item);
  };

  const isFavorite = (uid) => {
    return Boolean(likedItems[uid]);
  };

  useEffect(() => {
    actions.fetchPeopleList();
    actions.fetchPlanetsList();
    actions.fetchVehiclesList();
  }, []);

  return (
    <div>
      <div className="container col-md-12" id="charactersDiv">
        <h2>Characters</h2>
        <div className="cardsContainer col-md-11">
          {store.people.map((people) => (
            <div
              className="card"
              style={{ width: "18rem" }}
              key={`people-${people.uid}`}
            >
              <img
                src="https://picsum.photos/500/300"
                className="card-img-top"
                alt={`This is ${people.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {people.properties
                    ? people.properties.name
                    : "Name Not Available"}
                </h5>
                {people.properties && (
                  <div>
                    <p className="card-text">
                      Gender: {people.properties.gender}
                    </p>
                    <p className="card-text">
                      Hair Color: {people.properties.hair_color}
                    </p>
                    <p className="card-text">
                      Eye Color: {people.properties.eye_color}
                    </p>
                  </div>
                )}
                <div className="card-footer">
                  <Link
                    to={`/characterCard/${people.uid}`}
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      handleAddRemoveFav({
                        uid: people.uid,
                        name: people.properties
                          ? people.properties.name
                          : "Name Not Available",
                      })
                    }
                  >
                    <FontAwesomeIcon
                      icon={
                        isFavorite(people.uid) ? faHeartSolid : faHeartRegular
                      }
                      style={{ color: "#ff0000" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container col-md-12" id="planetsDiv">
        <h2>Planets</h2>
        <div className="cardsContainer col-md-11">
          {store.planets.map((planets) => (
            <div
              className="card"
              style={{ width: "18rem" }}
              key={`planets-${planets.uid}`}
            >
              <img
                src="https://picsum.photos/500/300"
                className="card-img-top"
                alt={`This is ${planets.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {planets.properties
                    ? planets.properties.name
                    : "Name Not Available"}
                </h5>
                {planets.properties && (
                  <div>
                    <p className="card-text">
                      Population: {planets.properties.population}
                    </p>
                    <p className="card-text">
                      Terrain: {planets.properties.terrain}
                    </p>
                  </div>
                )}
                <div className="card-footer">
                  <Link
                    to={`/planetsCard/${planets.uid}`}
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      handleAddRemoveFav({
                        uid: planets.uid,
                        name: planets.properties
                          ? planets.properties.name
                          : "Name Not Available",
                      })
                    }
                  >
                    <FontAwesomeIcon
                      icon={
                        isFavorite(planets.uid) ? faHeartSolid : faHeartRegular
                      }
                      style={{ color: "#ff0000" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container col-md-12" id="vehiclesDiv">
        <h2>Vehicles</h2>
        <div className="cardsContainer col-md-11">
          {store.vehicles.map((vehicles) => (
            <div
              className="card"
              style={{ width: "18rem" }}
              key={`vehicles-${vehicles.uid}`}
            >
              <img
                src="https://picsum.photos/500/300"
                className="card-img-top"
                alt={`This is ${vehicles.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {vehicles.properties
                    ? vehicles.properties.name
                    : "Name Not Available"}
                </h5>
                {vehicles.properties && (
                  <div>
                    <p className="card-text">
                      Crew: {vehicles.properties.crew}
                    </p>
                    <p className="card-text">
                      Lenght: {vehicles.properties.length}
                    </p>
                  </div>
                )}
                <div className="card-footer">
                  <Link
                    to={`/vehiclesCard/${vehicles.uid}`}
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      handleAddRemoveFav({
                        uid: vehicles.uid,
                        name: vehicles.properties
                          ? vehicles.properties.name
                          : "Name Not Available",
                      })
                    }
                  >
                    <FontAwesomeIcon
                      icon={
                        isFavorite(vehicles.uid) ? faHeartSolid : faHeartRegular
                      }
                      style={{ color: "#ff0000" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
