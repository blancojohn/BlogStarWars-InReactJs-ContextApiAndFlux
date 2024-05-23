/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            urlEntitys: [
                /* URLS DE LAS ENTIDIDADES PARA MOSTRAR Y CONSULTAR DESDE LA VISTA PRINCIPAL.
                   SON UTILIZADAS EN LA FUNCIÓN GETENTITYS*/
                "https://www.swapi.tech/api/people",
                "https://www.swapi.tech/api/vehicles",
                "https://www.swapi.tech/api/planets"
            ],
        },
        actions: {
            getEntitys: () => {
                /* EJECUTA 3 FETCH POR MEDIO DEL MAP PARA  AHORRAR LÍENAS DE CÓDIGO */
                const { urlEntitys } = getStore();
                const peticion = Promise.all(urlEntitys.map(
                    urlEntety =>
                        fetch(urlEntety)
                            .then(response => {
                                console.log('STATUS', response.status)
                                return response.json()
                            })
                            .then(data => {
                                console.log('ENTIDADES', data.results)
                            })
                ))
            },

        }
    }
}

export default getStore