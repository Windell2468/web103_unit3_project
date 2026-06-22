import { pool } from './database.js'


const resetDatabase = async () => {
    const createLocationsTable = `
        CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        address Text,
        city TEXT,
        state TEXT,
        zip TEXT,
        image TEXT
    );
   
`   
    const createEventsTable = `
    
        CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        date TEXT,
        time TEXT,
        image TEXT,
        location_id  INTEGER REFERENCES locations(id)

    
    );
    
    
    `
const seedLocationsTable = `
    INSERT INTO locations (name, address, city, state, zip, image)
    VALUES
    ('Gaming Arena', '100 GameVerse Boulevard', 'Virtual City', 'VA', '23803', 'https://images.unsplash.com/photo-1542751371-adc38448a05e'),
    ('Anime Theater', '200 Greatest Anime Ave', 'Virtual City', 'VA', '23803', 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba'),
    ('Manga Lounge', '300 Manga Street', 'Virtual City', 'VA', '23803', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da'),
    ('Cosplay Workshop', '400 Cosplay Blvd', 'Virtual City', 'VA', '23803', 'https://images.unsplash.com/photo-1697480157582-43d68447f959?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
`

const seedEventsTable = `
    Insert INTO events (title, date, time, image, location_id)
    VALUES
    ('Fighting and Shooting Game Tournament', '2026-07-16', '5:30 PM', 'https://www.mercurynews.com/wp-content/uploads/2024/07/EVO23_Day1_122004_StephanieLindgren-3_026e49.jpg', 1),
    ('Ultimate Anime Movie and TV Shows Marathon', '2026-07-17', '12:00 PM', 'https://comicbook.com/wp-content/uploads/sites/4/2025/12/Shonen-Jump-Manga-Anime-Franchises.jpg', 2),
    ('Greatest Manga Lounge', '2026-07-18', '3:00 PM', 'https://thetruejapan.com/wp-content/uploads/2017/12/20-Best-Manga-of-All-Time.jpg', 3),
    ('Ultimate Cosplay Contest', '2026-07-19', '4:30 PM', 'https://mcatlanta.mtgfestivals.com/content/dam/sitebuilder/rna/mtgfestivals/mcvegas/2025/images/applications/mc-vegas-2025-cosplay-contest-application.jpg/_jcr_content/renditions/original.image_file.2047.1365.file/395748150/mc-vegas-2025-cosplay-contest-application.jpg', 4);


`

try {
    await pool.query('DROP TABLE IF EXISTS events')
    await pool.query('DROP TABLE IF EXISTS locations')
    await pool.query(createLocationsTable)
    await pool.query(createEventsTable)
    await pool.query(seedLocationsTable)
    await pool.query(seedEventsTable)

    console.log('Database reset successfully')
} 
catch (error) {
    console.error('Error resetting database:', error)
}
finally {
    pool.end()
}



}

resetDatabase()