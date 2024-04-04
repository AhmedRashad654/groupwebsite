import React from 'react'
import RegimeMassacres from '../RegimeMassacres/RegimeMassacresUser'
import Martyrs from '../Martyrs/MartyrsUser'
import Missing from '../Missing/MissingUser'
import Detainees from '../Detainees/DetaineesUser'

export default function MainPage() {
  return (
    <>
    <RegimeMassacres/>
    <Martyrs/>
    <Missing/>
    <Detainees/>
    </>
  )
}
 