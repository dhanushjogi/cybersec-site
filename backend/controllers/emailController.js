const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// @desc    Send a contact email
// @route   POST /api/email/contact
// @access  Public
const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    await transporter.sendMail({
      from: '"CyberSec Site" <' + process.env.EMAIL_USER + '>',
      to: process.env.EMAIL_RECEIVER,
      subject: 'Contact Form: ' + subject,
      text: 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage: ' + message,
      html: '<p><strong>Name:</strong> ' + name + '<br><strong>Email:</strong> ' + email + '</p><p>' + message + '</p>'
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Send a newsletter subscription email
// @route   POST /api/email/newsletter
// @access  Public
const sendNewsletterSubscription = async (req, res) => {
  try {
    const { name, email } = req.body;
    await transporter.sendMail({
      from: '"CyberSec Site" <' + process.env.EMAIL_USER + '>',
      to: email,
      subject: 'Welcome to CyberSec Newsletter',
      text: 'Hi ' + name + ',\n\nThank you for subscribing to our cybersecurity newsletter. Stay tuned for updates!',
      html: '<p>Hi ' + name + ',</p><p>Thank you for subscribing to our cybersecurity newsletter.</p><p>Stay tuned for updates!</p>'
    });
    res.status(200).json({ message: 'Subscription confirmed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  sendContactEmail,
  sendNewsletterSubscription
};
