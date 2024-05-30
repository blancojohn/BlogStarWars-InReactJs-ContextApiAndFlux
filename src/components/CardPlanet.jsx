import React, { useContext } from "react";
import { Context } from '../store/AppContext'
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";


const CardPlanet = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Planets</h1>
                    {
                        store.planets.map((planet, index) => {
                            return (
                                <div key={planet.uid} className="col-md-3">
                                    <div className="card">
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

export default CardPlanet