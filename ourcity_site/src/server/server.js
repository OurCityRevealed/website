const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5010;

// Load storage
const { database, db } = require('./db');

app.listen(port, () => console.log('Server started on port ' + port));

const mailConfig = require('../../config/mailConfig.json');

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: mailConfig,
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to send messages");
    }
});

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

app.post('/api/contact', (req, res) => {
    // Send email
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    const mail = {
        from: name,
        to: "tjsuper2015@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});