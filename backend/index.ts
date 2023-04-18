import express from 'express'
import totalAvaliableCity from "./totalAvalibleCity";
import { carNameAndReachPath } from "./carNameAndReachPath";
import { Request, Response } from "express";
import cors from "cors"

const app = express()
const port = 5000
app.use(cors())

app.use(express.static('dist'))

app.get('/ticketBooking', (req : Request , res : Response) => {
  // console.log(totalAvaliableCity)
  res.send(totalAvaliableCity)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})