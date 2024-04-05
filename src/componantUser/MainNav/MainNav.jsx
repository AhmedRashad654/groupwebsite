import React, { useState } from 'react'
import './MainNav.css'
export default function MainNav() {

  const [open , setOpen] = useState(false)


  return (
    <>
    
    <div className="container">
      <div className="row py-3 gy-3">
        <div className="col-md-6 d-flex justify-content-between align-items-center">
          <h1 className='m-0'>الثورة السورية</h1>
          <div className="contact d-flex justify-content-between align-items-center position-relative">
            {open===true?<div className="social-icons d-flex align-items-center ms-1 p-2 text-white ">
            <i className="fa-brands fa-whatsapp ms-3"></i>
            <i className="fa-brands fa-instagram ms-3"></i>
            <i className="fa-brands fa-tiktok ms-3"></i>
            <i className="fa-brands fa-square-facebook ms-3"></i>
            <i className="fa-brands fa-square-twitter ms-3"></i>
            <i className="fa-regular fa-circle-xmark text-danger close" onClick={()=>setOpen(false)}></i>
            </div>:null}
            <p className='m-0 p-0 btn' onClick={()=>setOpen(true)}>تواصل معنا</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="search d-flex justify-content-between align-items-center position-relative">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder='ابحث هنا' className=' form-control pe-5' />
            <div className="buttons d-flex align-items-center gap-2">
            <button className='btn btn-create'>انشاء حساب</button>
            <button className='btn btn-login'>تسجيل الدخول</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
