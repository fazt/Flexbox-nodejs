const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', {
    title: 'Home Page'
  });
});

router.get('/about', (req, res) => {
  res.render('about.html', {
    title: 'About Us'
  });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', {
    title: 'Contact Us'
  });
});

router.get('/services', (req, res) => {
  res.render('services.html', {
    title: 'Our Services'
  });
});

module.exports = router;
