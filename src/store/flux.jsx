
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

            detailsPeople: {},
            detailsVehicle: {},
            detailsPlanet: {},

            favorites: [],

            urlBase: "https://www.swapi.tech/api/"
        },
        actions: {
            getEntitys: () => {
                const { urlBase } = getStore()
                fetch(`${urlBase}people`)
                    .then(res => res.json())
                    .then(data => {
                        let result = data.results.map((entity) => {
                            /* Aprovecho el array de la propiedad results que es retornado en la respuesta de la API para iterar
                               con un map, el cual desempaca los valores en un nuevo objeto en el return con spread operator y crear 
                               la nueva propiedad liked que cambia el estado del botón al hacer click(La API solo retorna las propiedades name, uid y url). 
                               Por cada iteración, a cada entidad se le declara la propiedad liked, inicialmente
                               en false(a cada obejeto dentro del array asigna una propiedad). 
                               De tal manera, cada card puede renderizar indivualmente el cambio de estado si es agregada,
                               como favorita en el array de favorites del store. Finalmente almaceno los datos en el seteando el store
                               de characters con la nueva propiedad por cada objeto en el array. De igual manera ocurre con las propiedades
                               del store characters, vehicles y planets */
                            return {
                                ...entity,
                                liked: false
                            }
                        })
                        setStore({ characters: result })
                    })

                    .catch(err => console.error(err))
                fetch(`${urlBase}vehicles`)
                    .then(res => res.json())
                    .then(data => {
                        let result= data.results.map((entity) => {
                            return {
                                ...entity,
                                liked: false
                            }
                        })
                        setStore({ vehicles: result })
                    })
                    .catch(err => console.error(err))
                fetch(`${urlBase}planets`)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ planets: data.results })
                    })
                    .catch(err => console.error(err))
            },

            getDetailsPeople: (uid) => {
                const { urlBase } = getStore()
                fetch(`${urlBase}people/${uid}`)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ detailsPeople: data.result.properties })
                    })
                    .catch(err => console.error(err))
            },

            getDetailsVehicle: (uid) => {
                const { urlBase } = getStore()
                fetch(`${urlBase}vehicles/${uid}`)
                    .then(res => res.json())
                    .then(data => {

                        console.log('VEHICLE',data.result.properties)
                        setStore({ detailsVehicle: data.result.properties })
                    })
                    .catch(err => console.log(err))
            },

            getDetailsPlanet: (uid) => {
                const { urlBase }= getStore()
                fetch(`${urlBase}planets/${uid}`)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ detailsPlanet: data.result.properties })
                    })
                    .catch(err => console.log(err))
            },
            /* Esta función además de agregar al array favorites por medio del setStore una entidad, también setea 
            la propiedad liked creada al momento de almacenar la respuesta de la API de cada entidad. El botón cambia
            de estado accediendo primero a la propiedad liked de cada entidad previamente seleccionada por index 
            y el tipo de entidad */
            addFavorites: (index, entity) => {
                /* Necesito la propiedad del store favorites para luego hacer el spread operator
                   cada vez que se agrega una entidad favorita */
                const store= getStore()
                const { favorites } = store
                let getEntity= store[entity]
                let favorite= getEntity[index]
                getEntity[index].liked = !getEntity[index].liked
                setStore({
                    favorites: [...favorites, {
                        favorite,
                        entity
                    }],
                    [entity]: getEntity
                })
            },

            deleteFavorites: (index) => {
                const { favorites } = getStore()
                let favorite = favorites[index].favorite.name
                let favoriteLess = favorites.filter(lessFavorite =>
                    lessFavorite.favorite.name !== favorite)
                setStore({
                    favorites: favoriteLess
                })
            },
        }
    }
}

export default getStore

          









