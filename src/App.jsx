import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Itinerary from './Components/Itinerary/Itinerary'
import Contact from './Components/Contact/Contact'
import Book from './Components/Book/Book'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import Sedan from './Components/SedanDezire/Sedan'
import Ertiga from './Components/Ertiga/Ertiga'
import Crysta from './Components/Crysta/Crysta'
import Etios from './Components/Etios/Etios'
import TukTuk from './Components/TukTuk/TukTuk'
import Popup from './Components/Popup/Popup'

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Popup />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/itinerary' element={<Itinerary />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sedan' element={<Sedan />} />
        <Route path='/ertiga' element={<Ertiga />} />
        <Route path='/crysta' element={<Crysta />} />
        <Route path='/etios' element={<Etios />} />
        <Route path='/tuktuk' element={<TukTuk />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App