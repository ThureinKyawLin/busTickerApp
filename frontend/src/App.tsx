import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AvaliableCarDetail from './Components/AvaliableCarDetail'
import Home from './Components/Home'
import Nav from './Components/Nav'
import TicketBooking from './Components/TicketBookingPage'
import FormForBooking from './Components/FormForBooking'

const App = () => {
  return (
    <div className=' h-full'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ticketBooking' element={<TicketBooking />} />
          <Route path='/avaliableCarDatail' element={<AvaliableCarDetail />} />
          <Route path='/fillYourInfo' element={<FormForBooking />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App