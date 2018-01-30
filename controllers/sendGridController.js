const db = require('firebase');


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // grab email chips from client
  },

  sendEmail: function(req, res) {
    // // SendGrid OPTION 2 - send multiple individual emails to multiple recipients*****************************************************************
    // only one recipient email will show in the 'to' field
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: ['mbradleystylist@gmail.com', 'mfbrad@vt.edu'],
      from: process.env.EMAIL,
      subject: 'Welcome to Convoy!',
      text: 'Your friend has invited you to join Convoy, the latest and greatest travel app on the market!',
      html: '<button>Join the Convoy!</button>',
    };
    
    sgMail.sendMultiple(msg);
    
    req.body.params;
    res.send("working");
   
  }
};

