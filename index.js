const express = require('express');
const app = express();
const path = require('path');

const quotes = require('./react-app/src/quotes.json');

app.use(express.json());
app.use('/', express.static('react-app/dist'));
app.use('/human', express.static(path.join(__dirname, 'react-app', 'dist')));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

// Define a health check endpoint
app.get('/healthcheck', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/api/quotes/:id', (req, res) => {
    const id = req.params.id;
    const quote = getQuote(id);
    if(!quote) {
        res.status(404).send({ error: `Quote ${id} not found!`})
    }
    else {
        res.send({ data: quote});
    }
})

function getQuote(id) {
    return quotes.find(q => q.id == id)
}