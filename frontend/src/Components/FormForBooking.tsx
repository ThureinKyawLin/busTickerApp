import React, { useContext } from 'react'
import { searchCarResult } from '../context/searchCarResult'


const FormForBooking = () => {

  const searchCarData = useContext(searchCarResult)
  console.log(searchCarData)
  return (
    <div>
        <div className=' w-[75%] rounded-lg overflow-hidden'>
            <img src='/expressCar.jpg' alt="shout htae" />
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default FormForBooking