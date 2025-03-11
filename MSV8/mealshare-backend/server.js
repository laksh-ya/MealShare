const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Connect to MongoDB
connectDB()

// Define routes (for now, you can add your route files later)
app.use('/api/auth', require('./routes/auth'))
app.use('/api/students', require('./routes/students'))
app.use('/api/staff', require('./routes/staff'))
app.use('/api/admin', require('./routes/admin'))
app.use('/api/qr', require('./routes/qr'))
app.use('/api/meals', require('./routes/meals'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
