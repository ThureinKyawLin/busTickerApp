import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const nav = useNavigate()
  const handleClick = () => {
    nav('/ticketBooking')
  }

  return (
    <div className=' flex justify-center'>
        <button className=' py-1 px-5 bg-sky-600 text-white rounded-md' onClick={handleClick}>Click</button>
        {/* <button className=' py-1 px-3'></button> */}
    </div>
  )
}

export default Home