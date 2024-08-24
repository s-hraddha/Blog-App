const express = require('express');
const cors = require("cors");
const app = express();

const Post = require("./Mongodb/Models/post");
const User = require("./Mongodb/Models/User")
const Comment = require("./Mongodb/Models/Comment")

const bodyParser = require("body-parser");
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Auth = require('./middleware/Auth')

// Middleware (e.g., bodyParser, CORS)
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Sign Up
app.post("/register", (req, res) => {
    const { username, email, password, phoneNumber } = req.body;

    if (!username || !email || !password || !phoneNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err,
            });
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                phoneNumber: req.body.phoneNumber,
            });
            newUser
                .save()
                .then((result) => {
                    res.json({
                        NewUser: result,
                    });
                })
                .catch((err) => {
                    if (err.code === 11000) {
                        return res.status(400).json({ message: "Email already exits" })
                    }
                    res.status(500).json({ message: err.message });
                });
        }
    });
});

// Sign In 
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }

                if (result) {
                    const token = jwt.sign(
                        {
                            email: user.email,
                            username: user.username,
                            phoneNumber: user.phoneNumber,
                        },
                        "check status for login",
                        {
                            expiresIn: "24h",
                        }
                    );
                    return res.json({ token: token, name: user.username });
                } else {
                    return res.status(401).json({ error: "Invalid password" });
                }
            });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

//create post  
app.post("/posts", (req, res) => {
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        summary: req.body.summary,
        detail: req.body.detail,
        createdBy: req.body.createdBy,
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
        id,
        {
            $set: {
                title: req.body.title,
                summary: req.body.summary,
                detail: req.body.detail,
                createdBy: req.body.createdBy,
                createdAt: req.body.createdAt,
            },
        }
    )
        .then((newPost) => {
            if (!newPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(newPost);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

// delete post
app.delete('/posts/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then((newPost) => {
            if (!newPost) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json({ message: 'Post deleted' });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

// add comment
app.post('/comment', (req, res) => {
    const { postId, userId, username, comment, commentAt } = req.body;
    const newComment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        postId,
        userId,
        username,
        comment,
        commentAt: commentAt || new Date()
    });

    newComment.save()
        .then(savedComment => {
            res.status(201).json(savedComment);
        })
        .catch(err => {
            res.status(400).json({ message: err.message });
        });
});

// delete comment
app.delete('/comment/:id', (req, res) => {
    console.log( req.params.id); // Debug log
    Comment.findByIdAndDelete(req.params.id)
        .then((deletedComment) => {
            if (!deletedComment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            res.json({ message: 'Comment deleted' });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});
// app.use((req, res) => {
//     res.send("Page Not Found");
//   });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;

