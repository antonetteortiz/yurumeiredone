import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FoodHero from '../components/food/FoodHero'
import AboutGarifunaFood from '../components/food/AboutGarifunaFood'


function FoodPage() {
    return (
        <div>
            <Nav />
            <FoodHero />
            <AboutGarifunaFood />
            <Footer />
        </div>
    )
}


export default FoodPage
