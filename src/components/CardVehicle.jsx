import React, { useContext } from "react";
import { Context } from '../store/AppContext'
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";


const CardVehicle = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Vehicles</h1>
                    {
                        store.vehicles.map((vehicle, index) => {
                            return (
                                <div key={vehicle.uid} className="col-md-3">
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h6 className="card-title">{vehicle.name}</h6>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`/vehicles/${vehicle.uid}`} type="button" className="btn btn-primary">Learn More</Link>
                                            <button onClick={() => actions.addFavorites(index, "vehicles")} className={`likeBtn ${vehicle.liked ? "liked" : ""}`}>
                                                <HeartIcon />
                                            </button>
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

export default CardVehicle