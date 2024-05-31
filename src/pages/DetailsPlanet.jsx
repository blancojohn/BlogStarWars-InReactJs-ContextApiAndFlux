import React, { useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useParams } from "react-router-dom";


const DetailsPlanet = () => {
    const { store, actions } = useContext(Context)
    const { name, climate, created, diameter, edited, gravity, terrain } = store.detailsPlanet
    const params = useParams()

    useEffect(() => {
        actions.getDetailsPlanet(params.uid)
    }, [params.uid])

    return (
        <>
            <div className="container card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/id/129/200/200" className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Climate: {climate}</li>
                            <li className="list-group-item">Created: {created}</li>
                            <li className="list-group-item">Diameter: {diameter}</li>
                            <li className="list-group-item">Edited: {edited}</li>
                            <li className="list-group-item">Gravity: {gravity}</li>
                            <li className="list-group-item">Terrain: {terrain}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsPlanet