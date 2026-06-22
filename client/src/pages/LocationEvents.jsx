import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({})
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const locationsData = await LocationsAPI.getAllLocations()
           const eventsData = await EventsAPI.getAllEvents()

            const currentLocation = locationsData[index - 1]
            const locationEvents = eventsData.filter(event => Number(event.location_id) === Number(index))
            

            setLocation(currentLocation)
            setEvents(locationEvents)
        }

        fetchData()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> No events scheduled at this location yet!</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents