const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-form', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/submit', req.body);
        res.send(`<h1>Flask Backend Response:</h1><p>${response.data}</p>`);
    } catch (error) {
        res.status(500).send("Error communicating with backend.");
    }
});

app.listen(3000, () => console.log("Frontend running on port 3000"));
