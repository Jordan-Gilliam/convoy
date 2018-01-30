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
      to: ['gilliamja.te@gmail.com', 'isa.oambrosio@gmail.com', 'gregory.jimr@gmail.com', 'mbradleystylist@gmail.com'],
      from: 'test@example.com',
      subject: '{friend} has invited you to join Convoy!',
      text: 'Hello and welcome to Convoy! Your friend {user} has invited you to join a convoy for your next trip. Click below to accept the invitation and sign up today. Convoy Description.',
      html: '<button>Join the Convoy!</button>',
    };
    // send and sendMultiple methods return a Promise
    // handle success and capture errors:
    // **this is needed for all options
    sgMail
      .sendMultiple(msg)
      .then(() => {
        //Celebrate
        console.log("email sent");
      })
      .catch(error => {

        //Log friendly error
        console.error(error.toString());

      });

      res.send("sent!");

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

//     
// }
