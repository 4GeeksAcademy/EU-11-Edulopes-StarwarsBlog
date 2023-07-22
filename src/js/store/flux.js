const getState = ({ getStore, getActions, setStore }) => {
	const fetchData = async (resource) => {
	  try {
		const resp = await fetch(`https://www.swapi.tech/api/${resource}/`);
		const jsonData = await resp.json();
		const tempArray = {};
  
		for (const item of jsonData.results) {
		  const uid = item.uid;
		  const detailResp = await fetch(`https://www.swapi.tech/api/${resource}/${uid}`);
		  const detailData = await detailResp.json();
		  tempArray[uid] = { uid, properties: detailData.result.properties };
		}
  
		return tempArray;
	  } catch (error) {
		console.error(`Error fetching ${resource}:`, error);
		return {};
	  }
	};
  
	return {
	  store: {
		favs: null,
		people: [],
		peopleDescription: null,
		vehicles: [],
		vehiclesDescription: null,
		planets: [],
		planetDescription: null,
	  },
	  actions: {
		addRemoveFav: (newFav) => {
		  if (!getStore().favs) {
			setStore({ favs: [newFav] });
			return;
		  }
		  if (getStore().favs.indexOf(newFav) === -1) {
			setStore({ favs: [...getStore().favs, newFav] });
		  } else {
			const newList = getStore().favs.filter((el) => el !== newFav);
			setStore({ favs: newList });
		  }
		},
		fetchPeopleList: async () => {
		  const peopleData = await fetchData("people");
		  setStore({ people: Object.values(peopleData) });
		  console.log("People Description:", Object.values(peopleData));
		},
		fetchPlanetsList: async () => {
		  const planetsData = await fetchData("planets");
		  setStore({ planets: Object.values(planetsData) });
		  console.log("Planets Description:", Object.values(planetsData));
		},
		fetchVehiclesList: async () => {
		  const vehiclesData = await fetchData("starships");
		  setStore({ vehicles: Object.values(vehiclesData) });
		  console.log("Vehicles Description:", Object.values(vehiclesData));
		},
	  },
	};
  };
  
  export default getState;
  