const getState = ({ getStore, getActions, setStore }) => {
  const fetchData = async (resource) => {
    try {
      const resp = await fetch(`https://www.swapi.tech/api/${resource}/`);
      const jsonData = await resp.json();
      const tempArray = [];

      const detailPromises = jsonData.results.map(async (item) => {
        const uid = item.uid;
        const detailResp = await fetch(
          `https://www.swapi.tech/api/${resource}/${uid}`
        );
        const detailData = await detailResp.json();
        return { uid, properties: detailData.result.properties };
      });

      const details = await Promise.all(detailPromises);

      details.forEach((detail) => {
        tempArray[detail.uid] = detail;
      });

      return tempArray;
    } catch (error) {
      console.error(`Error fetching ${resource}:`, error);
      return {};
    }
  };

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return {
    store: {
      favs: [],
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
          setStore({ favs: [{ uid: newFav.uid, name: newFav.name }] });
          return;
        }
      
        const isAlreadyFavorited = getStore().favs.some((fav) => fav.uid === newFav.uid);
      
        if (!isAlreadyFavorited) {
          setStore({ favs: [...getStore().favs, { uid: newFav.uid, name: newFav.name }] });
        } else {
          const newList = getStore().favs.filter((fav) => fav.uid !== newFav.uid);
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
