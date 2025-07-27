import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'
import Expertise from '../Components/Services/Expertise '
import Contact from '../Components/Contact/Contact'
import Navbar from '../Navbar/Navbar'
import '../CSS/style.css';
import '../CSS/querry.css';
const Routing = () => {
    return (
        <>
            <Router>
                < Navbar />
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="expertise" element={<Expertise />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </Router>

        </>
    )
}

export default Routing;