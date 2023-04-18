import React, { useContext } from 'react'
import { searchCarResult } from '../context/searchCarResult'

const FormForBooking = () => {

  const searchCarData = useContext(searchCarResult)
  console.log(searchCarData)
  return (
    <div>
        <div className=' w-[75%] rounded-lg overflow-hidden'>
            <img src="../src/assets/expressCar.jpg" alt="" />
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default FormForBooking