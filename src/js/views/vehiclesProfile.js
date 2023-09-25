import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesProfile = () => {
  const { store, actions } = useContext(Context);
  const [vehiclesDetails, setVehiclesDetails] = useState();
  const param = useParams();

  const getVehiclesData = async () => {
    const resp = await fetch(
      "https://www.swapi.tech/api/starships/" + param.id
    );
    const data = await resp.json();
    setVehiclesDetails(data.result.properties);
  };

  useEffect(() => {
    getVehiclesData();
  }, []);

  return (
    <div className="container d-flex m-5">
      <div className="container">
        <img src="https://picsum.photos/800/400" className="img-fluid" />
      </div>
      <div className="container d-flex flex-column">
        <h2 className="m-4 d-flex justify-content-center">
          {vehiclesDetails && vehiclesDetails.name}{" "}
          {vehiclesDetails && vehiclesDetails.description}{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="container-flex border-top border-danger">
          <div className="row d-flex category-fact-container">
            <div className="col-sm-4 col-md-2">
              <p>
                <strong>Model:</strong>
              </p>
              <p className="fact-text">
                {vehiclesDetails && vehiclesDetails.model}
              </p>
            </div>

            <div className="col-sm-4 col-md-2">
              <p>
                <strong>Class:</strong>
              </p>
              <p className="fact-text">
                {vehiclesDetails && vehiclesDetails.starship_class}
              </p>
            </div>

            <div className="col-sm-4 col-md-2">
              <p>
                <strong>Manufacturer:</strong>
              </p>
              <p className="fact-text">
                {vehiclesDetails && vehiclesDetails.manufacturer}
              </p>
            </div>

            <div className="col-sm-4 col-md-2">
              <p>
                <strong>Crew:</strong>
              </p>
              <p className="fact-text">
                {vehiclesDetails && vehiclesDetails.crew}
              </p>
            </div>

            <div className="col-sm-4 col-md-2">
              <p>
                <strong>Passengers:</strong>
              </p>
              <p className="fact-text">
                {vehiclesDetails && vehiclesDetails.passengers}
              </p>
            </div>

            <div className="col-sm-4 col-md-2">
              <p>
                <strong>Cargo Capacity:</strong>
              </p>
              <p className="fact-text">
                {vehiclesDetails && vehiclesDetails.cargo_capacity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
