import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await EventsAPI.getAllEvents()
            setEvents(eventsData)
        }

        fetchEvents()
    }, [])

    return (
        <div>
            <h1>Events Page</h1>

            {events.map((event) => (
                <Event
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    image={event.image}
                />
            ))}
        </div>
    )
}

export default Events