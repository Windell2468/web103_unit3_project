import express from 'express'
import { getAllLocations } from '../controllers/locations.js'
// import controllers for events and locations


const router = express.Router()

router.get('/locations', getAllLocations)

// define routes to get events and locations


export default router