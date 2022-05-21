//initial express server
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());






app.get('/', (req, res) => {
    res.send('Server Running on port 5000..✔️');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})