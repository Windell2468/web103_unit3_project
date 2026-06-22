import express from 'express'
import { getAllEvents } from '../controllers/events.js'
// import controllers for events and locations


const router = express.Router()

router.get('/events', getAllEvents)

// define routes to get events and locations


export default router