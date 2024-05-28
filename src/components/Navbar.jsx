import React, { useContext } from "react";
import { Context } from "../store/AppContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">StarWars</a>
                    </div>
                    <div className="dropdown">
                        <Link to='/' className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites {store.favorites.length}
                        </Link>
                        <ul className="dropdown-menu">
                            {
                                store.favorites.map((entity) => {
                                    return (
                                        <li key={entity.favorite.uid}>
                                            <Link to={`/details/${entity.favorite.name}`} onClick={()=>{actions.getPeople(entity.favorite.url)}} className="dropdown-item" href="#">
                                                {entity.favorite.name}
                                            </Link>
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


