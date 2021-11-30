import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FoodHero from '../components/food/FoodHero'
import AboutGarifunaFood from '../components/food/AboutGarifunaFood'
import GarifunaDishes from '../components/food/GarifunaDishes'
import AddARecipe from '../components/food/AddARecipe'
import Plantain from '../components/food/Plantain'
import Cassava from '../components/food/Cassava'


function FoodPage() {
    return (
        <div>
            <Nav />
            <FoodHero />
            <AboutGarifunaFood />
            <Plantain />
            <GarifunaDishes />
            <Cassava />
            <AddARecipe />
            <Footer />
        </div>
    )
}


export default FoodPage
