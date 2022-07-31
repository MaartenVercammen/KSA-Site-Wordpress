import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import './css/index.css'

function App() {
    return (
        <>
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path="/"/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
