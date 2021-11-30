import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FoodHero from '../components/food/FoodHero'
import AboutGarifunaFood from '../components/food/AboutGarifunaFood'
import GarifunaDishes from '../components/food/GarifunaDishes'


function FoodPage() {
    return (
        <div>
            <Nav />
            <FoodHero />
            <AboutGarifunaFood />
            <GarifunaDishes />
            <Footer />
        </div>
    )
}


export default FoodPage
