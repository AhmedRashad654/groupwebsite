import React from 'react'
import Navbar from '../componantUser/Navbar/Navbar'
import MainNav from '../componantUser/MainNav/MainNav'
import Header from '../componantUser/Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
export default function HomeUser() {
  return (
    <div>
      <MainNav />
      <Navbar />
      <Header />
      
      <div className="centerUser">
        <Outlet/>
      </div>
<<<<<<< HEAD
      <Footer/>
=======
      <Footer />
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
    </div>
  )
}

