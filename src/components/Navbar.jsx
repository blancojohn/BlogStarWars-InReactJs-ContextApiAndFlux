import React, { useContext } from "react";
import { Context } from "../store/AppContext";
import { Link } from "react-router-dom";
import { GiTrashCan } from "react-icons/gi";

const Navbar = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link to={'/'}className="navbar-brand" href="#">StarWars</Link>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites {store.favorites.length}
                        </button>
                        <ul className="dropdown-menu">
                            {
                                store.favorites.map((entity, index) => {
                                    return (
                                        <li key={entity.favorite.uid} className="d-flex">
                                            <Link to={`/details/${entity.favorite.uid}`} onClick={()=>{actions.selectEntity(index)}} className="dropdown-item" href="#">
                                                {entity.favorite.name}
                                            </Link>
                                            <button onClick={()=> actions.deleteFavorites(index)}>
                                                <GiTrashCan />
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar



