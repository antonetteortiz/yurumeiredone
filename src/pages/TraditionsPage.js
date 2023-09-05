import React from 'react'
import Nav from "../components/Nav";
import '../components/Nav.css';
import Footer from "../components/Footer";
import Traditions from '../components/traditions/Traditions';

function TraditionPage() {
    return (
        <div>
            <Nav />
            <Traditions />
            <Footer />
        </div>
    )
}

export default TraditionPage
