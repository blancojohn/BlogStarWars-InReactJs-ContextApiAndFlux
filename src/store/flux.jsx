
/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
*/
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            
            detailsPeople: [],
            detailsVehicle: [],
            detailsPlanet: [],
            
            liked: false,
            favorites: [],

            urlBase: "https://www.swapi.tech/api/"
        },
        actions: {
            getEntitys: () => {
                const { urlBase } = getStore()
                fetch(`${urlBase}people`)
                .then(res => res.json())
                .then(data => {
                    setStore({ characters: data.results })
                })
                .catch(err => console.error(err))
                fetch(`${urlBase}vehicles`)
                .then(res => res.json())
                .then(data => {
                    setStore({ vehicles: data.results })
                })
                .catch(err => console.error(err))
                fetch(`${urlBase}planets`)
                .then(res => res.json())
                .then(data => {
                    setStore({ planets: data.results })
                })
                .catch(err => console.error(err))
            },
            
            selectEntity: (index) => {
                const { characters } = getStore()
                let people = characters[index]
                setStore({
                    detailsPeople: [people]
                })
            },

            addFavorites: (index) => {
                const { characters, favorites } = getStore()
                let favorite = characters[index]
                setStore({
                    favorites: [...favorites, {
                        favorite
                    }]
                })
            },

            deleteFavorites: (index) => {
                const { favorites }= getStore()
                let favorite= favorites[index]
                console.log('INDICE', favorite)
                /* let favoriteLess= favorites.filter((less, index) => 
                    a.favorite.uid !== favorites.favorite.uid)
                setStore({
                    favorites: favoriteLess
                })  */
            },
            
            getDetailsPeople: (uid) => {
                const { urlBase }= getStore()
                fetch(`${urlBase}people/${uid}`)
                    .then(res =>res.json())
                    .then(data => {
                        setStore({ detailsPeople: data.result.properties })
                    }) 
                    .catch(err => console.error(err))
            },


        }
    }
}

export default getStore




