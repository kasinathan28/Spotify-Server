const express = require('express');
const cors = require('cors');
const router = require('./Routes/router');
// Import other router files as needed

require('dotenv').config();
require('./db/connection');

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

// Use routers
server.use(router);
// Use other routers as needed

server.listen(PORT, () => {
    console.log(`Spotify server started at ${PORT}`);
});
