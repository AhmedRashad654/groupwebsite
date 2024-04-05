import React from 'react'
<<<<<<< HEAD
import Liberated from '../SectionsUser/Liberated/Liberated'
import FlagsUser from '../SectionsUser/FlagsUser/FlagsUser'
import RegimeMassacres from '../SectionsUser/RegimeMassacres/RegimeMassacresUser'
import { Link } from 'react-router-dom'

=======
import RegimeMassacres from '../RegimeMassacres/RegimeMassacresUser'
import Martyrs from '../Martyrs/MartyrsUser'
import Missing from '../Missing/MissingUser'
import Detainees from '../Detainees/DetaineesUser'
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32

export default function MainPage() {
  return (
    <>
<<<<<<< HEAD
       <div className='container'>
           <div className="header position-relative py-5">
            <h3 className=" text-danger"> آخر الأخبار  </h3>
          </div>
        </div>
        <RegimeMassacres/>
        <Liberated/>
        <div className='container'>
        <Link className=' nav-link d-inline-block' to={'/newsDetails'}>
          < FlagsUser/ >
        </Link>
        </div>
=======
    <RegimeMassacres/>
    <Martyrs/>
    <Missing/>
    <Detainees/>
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
    </>
  )
}
 