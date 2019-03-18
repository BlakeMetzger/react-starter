const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Post = mongoose.model('posts');

module.exports = app => {
	app.get('/api/posts', async (req, res) => {
		const posts = await Post.find()
			.where('title')
			.exists()
			.exec();
		return res.send(posts);
	});

	app.post('/api/posts/delete:postId', async (req, res) => {
		Posts.findByIdAndRemove(req.params.postId, (err, res) => {
			if (err) return res.status(500).send(err);
			const response = {
				message: 'Post successfully deleted.',
				id: res._id
			};
			return res.status(200).send(response);
		});
	});

	app.post('/api/posts/create', async (req, res) => {
		const { title, categories, content } = req.body;

		const post = new Post({
			title,
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
			await post.save();
			const response = {
				message: 'Post successfully created.',
				id: res.id
			};
			res.send(response);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
