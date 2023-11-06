const express = require('express');
const app = express();
const quotes = require('./quotes.json');

app.use(express.json());
app.use(express.static('react-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
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