const router = require('express').Router();
const { Post } = require('../models/Post');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.user_id,
            },
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('posts', { layout: 'dashboard', posts });
    } catch (err) {
        res.redirect('login');
    }
});