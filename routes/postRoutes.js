const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Posts = mongoose.model('posts');

module.exports = app => {
  app.get('/api/posts', async (req, res) => {
    const posts = await Posts.find();

    res.send(posts);
  });

  app.post('/api/posts/delete:postId', async (req, res) => {
    Posts.findByIdAndRemove(req.params.postId, (err, res) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "Post successfully deleted.",
        id: res._id
      };
    return res.status(200).send(response);
      });
    })


  app.post('/api/posts', async (req, res) => {
    console.log(req);
      const { title, categories, content  } = req.body;

    const Posts = new Posts({
      title,
      author: req.user.id,
      content,
      categories,
      date: Date.now(),
      meta: {
        upvotes: 0,
        downvotes: 0,
        favorites: 0
      }
    });

    try {
      await Posts.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
