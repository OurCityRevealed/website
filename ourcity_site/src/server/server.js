const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5010;

// Load storage
const { database, db } = require('./db');

app.listen(port, () => console.log('Server started on port ' + port));

app.put('/api/download/count', (req, res) => {
    // Increment download count
    database.get(database.ref(db, 'downloadsCount')).then(data => {
        if (data.val() != null) {
            let count = data.val();
            let newCount = count + 1;
            const updates = {};
            updates['/downloadsCount'] = newCount;
            database.update(database.ref(db), updates);
            res.status(200).send({ count: newCount });
        } else {
            // Create counter
            let ref = database.ref(db, 'downloadsCount');
            database.set(ref, 1);
            res.status(200).send({ count: 1 });
        }
    }).catch(err => {
        res.status(400).send(err);
    });

});