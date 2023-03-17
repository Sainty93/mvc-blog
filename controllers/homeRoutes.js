 const router = require('express').Router();
 const { User, Post, Comment } = require('../models');

 router.get('/', async (req, res) => {
    res.render('homepage');
 });

 router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
