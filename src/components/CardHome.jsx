import React, { useContext } from "react";
import { Context } from '../store/AppContext'
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";


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
                                <div key={people.uid} className="col-md-3">
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h6 className="card-title">{people.name}</h6>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`/details/${people.uid}`} onClick={()=>actions.selectEntity(index)} type="button" className="btn btn-primary">Learn More</Link>
                                            <button onClick={()=>actions.addFavorites(index)} className={`likeBtn ${store.liked ? "liked" : ""}`}>
                                                <HeartIcon />
                                            </button>
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
                                <div key={vehicle.uid} className="col-md-3">
                                    <div className="card">
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

export default CardHome



