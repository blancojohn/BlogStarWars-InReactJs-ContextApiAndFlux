/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
           /*  entitys: {
                characters: null,
                vehicles: null,
                planets: null
            }, */
            characters: null,
            vehicles: null,
            planets: null, 
            /*  entitys: [],
             people:[],
             vehicles: [],
             planets: [], */
            /*  urlEntitys:{
                 people: "https://www.swapi.tech/api/people",
                 vehicles: "https://www.swapi.tech/api/vehicles",
                 planets: "https://www.swapi.tech/api/planets"
             } */
            urlEntitys: [
                /* URLS DE LAS ENTIDIDADES PARA MOSTRAR Y CONSULTAR DESDE LA VISTA PRINCIPAL.
                   SON UTILIZADAS EN LA FUNCIÓN GETENTITYS*/
                "https://www.swapi.tech/api/people",
                "https://www.swapi.tech/api/vehicles",
                "https://www.swapi.tech/api/planets"
            ],
        },
        actions: {
            getEntitys: async () => {
                const responseCharacters=  await fetch("https://www.swapi.tech/api/people")
                const responseVehicles= await fetch("https://www.swapi.tech/api/vehicles")
                const responsePlanets=  await fetch("https://www.swapi.tech/api/planets")

                const dataCharacters= await responseCharacters.json()
                const dataVehicles= await responseVehicles.json()
                const dataPlanets= await responsePlanets.json()
                console.log('ENTIDADES', dataCharacters.results, dataVehicles.results, dataPlanets.results)
                setStore({
                    characters: dataCharacters.results,
                    vehicles: dataVehicles.results,
                    planets: dataPlanets.results
                }) 
                
                
               /*  const { urlEntitys }= getStore();
                const promises= urlEntitys.map(urlEntity => fetch(urlEntity))
                const responses= await Promise.all(promises)
                const datas= await Promise.all(responses.map(
                    response => {
                       return response.json()
                    }
                ))
                console.log('ENTIDADES', datas)
                setStore({
                    characters: datas,
                    vehicles: datas,
                    planets: datas,
                })  */
                /* EJECUTA 3 FETCH POR MEDIO DEL MAP PARA  AHORRAR LÍENAS DE CÓDIGO */
              /*  const { urlEntitys, entitys } = getStore();
                try {
                    const peticion = await Promise.all(urlEntitys.map(
                        urlEntety =>
                            fetch(urlEntety)
                                .then(response => {
                                    console.log('STATUS', response.status)
                                    return response.json()
                                })
                                .then(data => {
                                    console.log('ENTIDADES', data.results)
                                    setStore({entitys:  data.results})
                                })
                    ))

                } catch (error) {

                }  */
            },

        }
    }
}

export default getStore