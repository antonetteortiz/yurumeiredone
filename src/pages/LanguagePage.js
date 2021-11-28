import React from 'react'
import Nav from '../components/Nav'
import Heading from '../components/language/LanguageHeading'
import CommonPhrases from '../components/language/CommonPhrases'
import Footer from '../components/Footer'

function LanguagePage() {
    return (
        <div>
            <Nav />
            <Heading />
            <CommonPhrases />
            <Footer />
        </div>
    )
}

export default LanguagePage
