/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            urlBase: 'https://www.swapi.tech/api/',
        },
        actions: {
            getEntitys: ()=>{
                const { urlBase }= getStore();
                const urlResourcePeople= `${urlBase}people`;

                fetch(urlResourcePeople)
                .then(response=>{
                    console.log(response)
                    return response.json()
                })
                .then(data=>{
                    console.log(data)
                })
                .catch(error=>
                    console.log(error))
            },  
            
        }
    }
}

export default getStore