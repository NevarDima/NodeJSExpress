import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/user-routes.js'

const app = express()
const PORT = 8080

app.use(bodyParser.json())
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello from home page')
})
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`))