
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

            people: [],
            vehicle: [],
            planet: [],

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

            getPeople: (url) => {
                return fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setStore({ people: data.result.properties })
                    })
                    .catch(err => console.log(err))
            },

            /*  handleLikeUnLike: () => {
                 const { favorites }= getStore()
                 setStore({favorites: })
             }, */

           /*  getFavorite: (url) => {
                return fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setStore({ favorites: data.result.properties })
                    })
                    .catch(err => console.log(err))

            } */

            getFavorites: (index) => {
                const { characters, favorites }= getStore()
                let favorite= characters[index]
                setStore({favorites: [...favorites, {
                    favorite
                }]})                
            }
        }
    }
}

export default getStore



