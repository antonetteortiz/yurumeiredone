import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MusicHeader from '../components/music/MusicHeader';
import MusicInfo from '../components/music/MusicInfo';
import Albums from '../components/music/Albums';

function MusicPage() {
    return (
        <div>
            <Nav />
            <MusicHeader />
            <MusicInfo />
            <Albums />
            <Footer />
        </div>
    )
}

export default MusicPage
