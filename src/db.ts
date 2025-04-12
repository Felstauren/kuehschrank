import pg from 'pg';
import dotenv from 'dotenv'

export const prerender = false;


dotenv.config();

const client = new pg.Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) ,
    database: process.env.DB_NAME ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,    
});

await client.connect()

export { client as db}