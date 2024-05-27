import React, { useContext } from "react";
import { Context } from "../store/AppContext";


const Navbar = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favorites
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        store.favorites.map((entity)=>{
                                            return(
                                                <>
                                                    <li key={entity.entidad.uid}><a className="dropdown-item" href="#">{entity.entidad.name}</a></li>
                                                    
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
