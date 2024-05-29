// Create web server
// Create a new comment
// Get all comments
// Get comment by id
// Update comment by id
// Delete comment by id

// Dependencies
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Create a new comment
router.post('/comments', async (req, res) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment,
        date: req.body.date
    });

    try {
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all comments
router.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get comment by id
router.get('/comments/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update comment by id
router.patch('/comments/:commentId', async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne(
            { _id: req.params.commentId },
            { $set: { name: req.body.name, comment: req.body.comment, date: req.body.date } }
        );
        res.json(updatedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete comment by id
router.delete('/comments/:commentId', async (req, res) => {
    try {
        const removedComment = await Comment.deleteOne({ _id: req.params.commentId });
        res.json(removedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;