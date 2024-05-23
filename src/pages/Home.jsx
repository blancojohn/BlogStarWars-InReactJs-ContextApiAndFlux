import React, { useContext } from 'react'
import CardHome from '../components/CardHome' 
import { Context } from '../store/AppContext'

const Home = () => {
    const { store, actions }= useContext(Context)
    return (
        <>
            <CardHome /> 
        </>
    )
}

export default Home