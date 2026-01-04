import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "my_db_fasco",
    password: "Huenu1227@",
    port: 5433,
})