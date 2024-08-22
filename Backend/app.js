const express = require('express');
const cors = require("cors");
const app = express();

const Post = require("./Mongodb/Models/post");

const bodyParser = require("body-parser");
const { default: mongoose } = require('mongoose');

// Middleware (e.g., bodyParser, CORS)
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// create a new posts
app.post("/posts", (req, res) => {
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        summary: req.body.summary,
        detail: req.body.detail,
        createdAt: req.body.createdAt,
    });
    post.save()
        .then((newPost) => {
            res.status(201).json(newPost);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

// get all posts
app.get('/posts', (req, res) => {
    Post.find()
        .then((newPost) => {
            res.json(newPost);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// get a specific post
app.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id)
        .then((newPost) => {
            res.json(newPost)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        });
});

// update a post
app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    Post.findByIdAndUpdate(
        { _id: id },
        {
            $set: {
                title: req.body.title,
                summary: req.body.summary,
                detail: req.body.detail,
                createdAt: req.body.createdAt,
            },
        }
    )
        .then((newPost) => {
            res.json(newPost);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

// Delete post
app.delete('/posts/:id', (req, res) => {
    Post.findById(req.params.id)
        .then((newPost) => {
            if (!newPost) {
                throw new Error('Post not found');
            }
            return newPost.remove;
        })
        .then(() => {
            res, json({ message: 'Post deleted' });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });

});

app.use((req, res) => {
    res.send("Page Not Found");
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;

