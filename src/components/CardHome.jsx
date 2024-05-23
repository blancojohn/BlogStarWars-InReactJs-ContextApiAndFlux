import React, { useContext } from "react";
import { Context } from '../store/AppContext'

const CardHome = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <h1>Characters</h1>
            {
                store.characters && Array.isArray(store.characters) && store.characters.length > 0 &&
                store.characters.map((people, index) => {
                    return (
                        <div key={people.id} className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{people.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    )
                })
            }
            <h1>Vehicles</h1>
            {
                store.vehicles && Array.isArray(store.vehicles) && store.vehicles.length > 0 &&
                store.vehicles.map((vehicle, index) => {
                    return (
                        <div key={vehicle.id} className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    )
                })
            }
            <h1>Planets</h1>
            {
                store.planets && Array.isArray(store.planets) && store.planets.length > 0 &&
                store.planets.map((planet, index) => {
                    return (
                        <div key={planet.id} className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default CardHome

