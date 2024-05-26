import React, { useContext } from "react";
import { Context } from "../store/AppContext";


const CardDetails = () => {
    const { store } = useContext(Context)
    const { height, name }= store.people
    
    return (
        <>
            <div className="card mb-3">
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
                            <li className="list-group-item">{height}</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDetails




