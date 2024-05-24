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
        },
        actions: {
            getEntitys: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.results)
                        setStore({ characters: data.results })
                    })
                    .catch(err => console.error(err))
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.results)
                        setStore({ vehicles: data.results })
                    })
                    .catch(err => console.error(err))
                fetch("https://www.swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.results)
                        setStore({ planets: data.results })
                    })
                    .catch(err => console.error(err))
            }

        }
    }
}

export default getStore

