import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store } = useContext(Context);
  const { uid } = useParams();
  const item = store.favs.find((item) => item.uid === uid);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4">This is {item.properties.name}</h1>
      <hr className="my-4" />
      <p>Gender: {item.properties.gender}</p>
      <p>Hair Color: {item.properties.hair_color}</p>
      <p>Eye Color: {item.properties.eye_color}</p>
      {/* Add more details if needed */}
      <Link to="/">Back home</Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
