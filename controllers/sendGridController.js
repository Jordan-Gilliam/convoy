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
    console.log("sg package found");
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: ['mbradleystylist@gmail.com', 'mfbrad@vt.edu'],
      from: 'weliketocodethings@gmail.com',
      subject: 'Hello world',
      text: 'Hello plain world!',
      html: '<button>Join the Convoy!</button>',
    };
    
    console.log(msg);
    sgMail.sendMultiple(msg);
    console.log("sent!");
    res.send("sent!");
    
//     const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
//     const request = sg.emptyRequest({
//       method: 'POST',
//       path: '/v3/mail/send',
//       body: {
//         personalizations: [{
//           to: [{
//             email: 'mbradleystylist@gmail.com'
//           }],
//           subject: "You've been invited to join Convoy!"
//         }],
//         from: {
//           email: 'weliketocodethings@gmail.com'
//         },
//         content: [{
//           type: 'text/plain',
//           value: 'and easy to do anywhere, even with Node.js'
//         }]
//       }
//     });
    
    

//     // With promise
//     sg.API(request)
//       .then(function(response) {
//         console.log(response.statusCode);
//         console.log(response.body);
//         console.log(response.headers);
//       })
//       .catch(function(error) {
//         // error is an instance of SendGridError
//         // The full response is attached to error.response
//         console.log(error.response.statusCode);
//       });

//     // With callback
//     sg.API(request, function(error, response) {
//       if (error) {
//         console.log('Error response received');
//       }
//       console.log(response.statusCode);
//       console.log(response.body);
//       console.log(response.headers);
//     });
//     res.send("done");
//   }

   
}
};

//  mailer(req.headers.origin, {
//          email: req.user.email,
//          username: req.user.name,
//          password: req.user.password
//       }, 0);
//       res.status(200).send("verification email sent!!");




