import express from 'express'
import { join } from 'path'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017'
import connectDB from './db/connectdb.js'

connectDB(DATABASE_URL)
app.use(express.urlencoded({ extended: false }))

//static files
app.use('/student', express.static(join(process.cwd(), "public")))
app.use('/student/edit', express.static(join(process.cwd(), "public")))
app.set('view engine', 'ejs')

app.use('/student', web)

app.listen(port, () => {
    console.log(`server starts at http://localhost:${port}`)
})

