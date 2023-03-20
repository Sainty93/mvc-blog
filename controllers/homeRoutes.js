 const router = require('express').Router();
 const { User, Post, Comment } = require('../models');

 router.get('/', async (req, res) => {
    res.render('homepage');
 });

 router.get('/signup', (req,res) => {
    res.render('signup');
 });

 router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('login');
});
router.get('/dashboard', (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('dashboard');
});

module.exports = router;
