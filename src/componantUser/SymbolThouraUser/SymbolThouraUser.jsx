import React from 'react'
<<<<<<< HEAD
import Liberated from '../SectionsUser/Liberated/Liberated'
import style from './SymbolThouraUser.module.css'
import SliderSymbolThouraUser from './SliderSymbolThouraUser'
export default function SymbolThouraUser() {
  return (
    <>
           <div className='container'>
           <div className="header position-relative py-5">
            <h3 className=" text-danger">رموز الثورة</h3>
          </div>
           </div>
           <Liberated/>
           <SliderSymbolThouraUser/>

          <div className='container'>
           <div className={`header position-relative py-5 ${style.libCard}`}>
            <h3 className=" text-danger ">بطاقات التكريم  </h3>
          </div>
           </div>
           <Liberated/>
          <SliderSymbolThouraUser/>
    
    </>
=======

export default function SymbolThouraUser() {
  return (
    <div>SymbolThouraUser</div>
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
  )
}
