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
                                            <Link to={`/planet/${planet.uid}`} /* onClick={()=>actions.selectEntity(index)} */ type="button" className="btn btn-primary">Learn More</Link>
                                            <button onClick={() => actions.addFavoritePlanet(index)} className={`likeBtn ${planet.liked ? "liked" : ""}`}>
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

export default CardPlanet