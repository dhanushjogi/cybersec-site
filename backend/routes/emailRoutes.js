const express = require('express');
const router = express.Router();
const {
  sendContactEmail,
  sendNewsletterSubscription
} = require('../controllers/emailController');

router.post('/contact', sendContactEmail);
router.post('/newsletter', sendNewsletterSubscription);

module.exports = router;
