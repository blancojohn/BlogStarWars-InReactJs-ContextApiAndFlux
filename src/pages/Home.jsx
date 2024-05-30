import React, { useContext } from 'react'
import { Context } from '../store/AppContext'
import CardPeople from '../components/CardPeople'
import CardVehicle from '../components/CardVehicle'
import CardPlanet from '../components/CardPlanet'

const Home = () => {
    const { store, actions }= useContext(Context)
    return (
        <>
            <CardPeople />
            <CardVehicle />
            <CardPlanet /> 
        </>
    )
}

export default Home