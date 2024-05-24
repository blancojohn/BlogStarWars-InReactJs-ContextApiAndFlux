import React, { useContext } from "react";
import { Context } from '../store/AppContext'

const CardHome = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Characters</h1>
                    {
                        store.characters.map((people, index) => {
                            return (
                                <div className="col-md-2">
                                    <div key={people.uid} className="card">
                                        <img src="..." className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h6 className="card-title">{people.name}</h6>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <h1>Vehicles</h1>
                    {
                        store.vehicles.map((vehicle, index) => {
                            return (
                                <div className="col-md-2">
                                    <div key={vehicle.uid} className="card">
                                        <img src="..." className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h6 className="card-title">{vehicle.name}</h6>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <h1>Planets</h1>
                    {
                        store.planets.map((planet, index) => {
                            return (
                                <div className="col-md-2">
                                    <div key={planet.uid} className="card">
                                        <img src="..." className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h6 className="card-title">{planet.name}</h6>
                                        </div>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default CardHome

