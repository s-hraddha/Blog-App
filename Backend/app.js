const express = require('express');
const cors = require("cors");
const app = express();

const Post = require("./Mongodb/Models/post");
const User = require("./Mongodb/Models/User")

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
app.post('/signup', async (req, res) => {
    try {
      const { username, email, password, phoneNumber } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        username,
        email,
        password: hashedPassword,
        phoneNumber
      });
  
      await user.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Sign In 
  app.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//create post  
app.post("/posts", (req, res) => {
    const { _id, title, summary, detail, createdAt } = req.body;
    if (!_id) {
        return res.status(400).json({ message: "ID is required" });
    }
    const post = new Post({
        _id,
        title,
        summary,
        detail,
        createdAt,
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




// app.use((req, res) => {
//     res.send("Page Not Found");
//   });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;

