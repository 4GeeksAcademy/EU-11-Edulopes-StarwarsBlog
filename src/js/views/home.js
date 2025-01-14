import "../../styles/home.css";
import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";



export const Home = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const handleAddRemoveFav = (item) => {
		actions.addRemoveFav(item);
	  };

	const isFavorite = (uid) => {
		return store.favs && store.favs.includes(uid);
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
				<div className="container cardsContainer col-md-8">
				{store.people.map((people) => (
					<div className="card" style={{ width: '18rem' }} key={`people-${people.uid}`}>
						<img src="https://picsum.photos/500/300" className="card-img-top" alt={`This is ${people.name}`} />
						<div className="card-body">
						<h5 className="card-title">{people.properties.name}</h5>
							<div>
								<p className="card-text">Gender: {people.properties.gender}</p>
								<p className="card-text">Hair Color: {people.properties.hair_color}</p>
								<p className="card-text">Eye Color: {people.properties.eye_color}</p>
							</div>
							<div className="card-footer">
							<Link to={`/single/${people.uid}`} className="btn btn-primary">
								Learn More
							</Link>
							<button
								className="btn btn-outline-warning"
								onClick={() => handleAddRemoveFav(people)}
							>
								<FontAwesomeIcon icon={isFavorite(people.uid) ? faHeartSolid : faHeartRegular} />
							</button>
							</div>
						</div>
					</div>
					))}
				</div>
			</div>


			<div className="container col-md-12" id="planetsDiv">
				<h2>Planets</h2>
				<div className="container cardsContainer col-md-8">
				{store.planets.map(planets => (
				<div className="card" style={{ width: '18rem' }} key={`planets-${planets.uid}`}>
				<img src="https://picsum.photos/500/300" className="card-img-top" alt={`This is ${planets.name}`}/>
				<div className="card-body">
					<h5 className="card-title">{planets.properties.name} </h5>
						<div>
								<p className="card-text">Population: {planets.properties.population}</p>
								<p className="card-text">Terrain: {planets.properties.terrain}</p>
						</div>
						<div className="card-footer">
							<Link to={`/single/${planets.uid}`} className="btn btn-primary">
								Learn More
							</Link>
							<button
								className="btn btn-outline-warning"
								onClick={() => handleAddRemoveFav(planets)}
							>
								<FontAwesomeIcon icon={isFavorite(planets.uid) ? faHeartSolid : faHeartRegular} />
							</button>
							</div>
				 </div>
			</div> 
				))}
				</div>
			</div>
			<div className="container col-md-12" id="vehiclesDiv">
				<h2>Vehicles</h2>
				<div className="container cardsContainer col-md-8">
				{store.vehicles.map(vehicles => (
				<div className="card" style={{ width: '18rem' }} key={`vehicles-${vehicles.uid}`}>
				<img src="https://picsum.photos/500/300" className="card-img-top" alt={`This is ${vehicles.name}`}/>
				<div className="card-body">
					<h5 className="card-title">{vehicles.properties.name} </h5>
						<div>
								<p className="card-text">Crew: {vehicles.properties.crew}</p>
								<p className="card-text">Lenght: {vehicles.properties.length}</p>
						</div>
						<div className="card-footer">
							<Link to={`/single/${vehicles.uid}`} className="btn btn-primary">
								Learn More
							</Link>
							<button
								className="btn btn-outline-warning"
								onClick={() => handleAddRemoveFav(vehicles)}
							>
								<FontAwesomeIcon icon={isFavorite(vehicles.uid) ? faHeartSolid : faHeartRegular} />
							</button>
							</div>

				 </div>
			</div> 
				))}
				</div>
			</div>
		</div>
)};
