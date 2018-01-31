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
      to: ['email1@gmail.com, email2@gmail.com'],
      from: 'email3@gmail.com',
      subject: 'Welcome to Convoy!',
      text: "Boom. Great Success!",
      html: '<img src="../public/convoy.png" /><button>Join the Convoy!</button>',
    };
    
    sgMail.sendMultiple(msg);
    
    req.body.params;
    res.send("working");
    console.log("sent");
   
  }
};

