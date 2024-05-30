import React, { useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useParams } from "react-router-dom";

const DetailsVehicle = () => {
    const { store, actions } = useContext(Context)
    const { name } = store.detailsVehicle
    const params = useParams()

    useEffect(() => {
        actions.getDetailsVehicle(params.uid)
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
                            <li className="list-group-item"></li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item"></li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsVehicle