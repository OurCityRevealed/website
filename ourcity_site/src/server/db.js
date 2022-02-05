const firebase = require('firebase/app');

// Add the Firebase products that you want to use
const database = require('firebase/database');

// You web app's Firebase configuration
const firebaseConfig = require('../../config/firebaseConfig.json');

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = database.getDatabase(app);

module.exports = { firebase: app, database, db: db };