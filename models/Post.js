const mongoose = require('mongoose');
const { Schema } = mongoose;

var postSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    title:  String,
    author: String,
    body:   String,
    categories: [String],
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      upvotes: Number,
      downvotes: Number,
      favs:  Number
    }
  });

mongoose.model('posts', postSchema);
