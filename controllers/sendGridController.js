const db = require('firebase');


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // grab email chips from client
  },

  sendEmail: function(req, res) {
    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [{
          to: [{
            email: 'mbradleystylist@gmail.com'
          }],
          subject: "You've been invited to join Convoy!"
        }],
        from: {
          email: 'weliketocodethings@gmail.com'
        },
        content: [{
          type: 'text/plain',
          value: 'and easy to do anywhere, even with Node.js'
        }]
      }
    });

    // With promise
    sg.API(request)
      .then(function(response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
      })
      .catch(function(error) {
        // error is an instance of SendGridError
        // The full response is attached to error.response
        console.log(error.response.statusCode);
      });

    // With callback
    sg.API(request, function(error, response) {
      if (error) {
        console.log('Error response received');
      }
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });
    res.send("done");
  }
};

//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };

//  mailer(req.headers.origin, {
//          email: req.user.email,
//          username: req.user.name,
//          password: req.user.password
//       }, 0);
//       res.status(200).send("verification email sent!!");




// sendGrid() {

//     console.log('sending!');
//     const { emails } = this.state;
//     console.log({emails});

//     API.saveConvoy

//     const sgMail = require('@sendgrid/mail');
//     // const sg = require("sendgrid")(SENDGRID_API_KEY);
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//     const msg = {
//       to: ['gilliamja.te@gmail.com', 'isa.oambrosio@gmail.com', 'gregory.jimr@gmail.com', 'mbradleystylist@gmail.com'],
//       from: 'test@example.com',
//       subject: '{friend} has invited you to join Convoy!',
//       text: 'Hello and welcome to Convoy! Your friend {user} has invited you to join a convoy for your next trip. Click below to accept the invitation and sign up today. Convoy Description.',
//       html: '<button>Join the Convoy!</button>',
//     };

//     // send and sendMultiple methods return a Promise
//     // handle success and capture errors:
//     // **this is needed for all options
//     sgMail
//       .send(msg)
//       .then(() => {
//         //Celebrate
//         console.log("email sent");
//       })
//       .catch(error => {

//         //Log friendly error
//         console.error(error.toString());

//         // //Extract error msg
//         const {message, code, response} = error;

//         // //Extract response msg
//         const {headers, body} = response;
//       });

//     sgMail.send(msg);
// }
