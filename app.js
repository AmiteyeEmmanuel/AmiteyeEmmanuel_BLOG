//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const request = require("request");
const https = require("https");
const mongoose = require('mongoose');
const path = require('path');
const fetch = require('node-fetch');
const fileupload = require('express-fileupload');
const env = require('dotenv').config();

let initial_path = path.join(__dirname, "public");


const app = express();


// app use/set

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(fileupload());


mongoose.connect(process.env.MONGO_URL);


const postSchema = {
    title: String,
    content: String
}

const Post = mongoose.model("Post", postSchema);


app.get("/", function(req, res) {
    Post.find({}, function(err, posts) {
        res.render("home", {
            posts: posts,
        });
    });
});


app.get("/posts/:postId", function(req, res) {
    const requestedPostId = req.params.postId;
    Post.findOne({ _id: requestedPostId }, function(err, post) {
        res.render("post", {
            title: post.title,
            content: post.content
        });
    });
});



app.get("/posts/:postName", function(req, res) {
    const requestedTitle = _.lowerCase(req.params.postName);
    posts.forEach(function(post) {
        const storedTitle = _.lowerCase(post.title);
        if (storedTitle === requestedTitle) {
            res.render("post", {
                title: post.title,
                content: post.content
            });
        }
    });

});


app.get("/editor", function(req, res) {
    res.render("editor")
        // res.sendFile(__dirname + "/views/editor.ejs")
        // res.sendFile(path.join(initial_path, "editor.ejs"));
})


// upload route

app.post('/upload', function(req, res) {
    let file = req.files.image;
    let date = new Date();

    //image name
    let imageName = date.getDate() + date.getTime() + file.name;

    // image upload path

    let path = 'public/uploads/' + imageName;

    file.mv(path, (err, result) => {
        if (err) {
            throw err;
        } else {
            // image upload path
            res.json(`uploads/${imageName}`)
        }
    })
})


app.get('/:blog', function(req, res) {
    res.render("Blog");
})


app.use(function(req, res) {
    res.json("404");
})








app.listen(3000, function() {
    console.log("Server started on port 3000");
});