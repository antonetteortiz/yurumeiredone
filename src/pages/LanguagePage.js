import React from 'react'
import Nav from '../components/Nav'
import Heading from '../components/language/LanguageHeading'
import CommonPhrases from '../components/language/CommonPhrases'
import Footer from '../components/Footer'
import FillerContainer from '../components/language/FillerContainer'

function LanguagePage() {
    return (
        <div>
            <Nav />
            <Heading />
            <FillerContainer />
            <CommonPhrases />
            <Footer />
        </div>
    )
}

export default LanguagePage
