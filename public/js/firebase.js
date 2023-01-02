const env = require('dotenv').config();

let firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "music-blog-website.firebaseapp.com",
    projectId: "music-blog-website",
    storageBucket: "music-blog-website.appspot.com",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();