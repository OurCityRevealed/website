const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5010;

// Load storage
//const { database, db } = require('./db');

app.listen(port, () => console.log('Server started on port ' + port));

app.put('/api/download/count', (req, res) => {
    // Increment download count
    let respBody = {
        count: 0
    }
    res.status(200).send(respBody);
});