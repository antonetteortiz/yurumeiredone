import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FoodHero from '../components/food/FoodHero'
import AboutGarifunaFood from '../components/food/AboutGarifunaFood'
import GarifunaDishes from '../components/food/GarifunaDishes'
import AddARecipe from '../components/food/AddARecipe'


function FoodPage() {
    return (
        <div>
            <Nav />
            <FoodHero />
            <AboutGarifunaFood />
            <GarifunaDishes />
            <AddARecipe />
            <Footer />
        </div>
    )
}


export default FoodPage
