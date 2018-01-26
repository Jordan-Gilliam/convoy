import React from "react";

// 3 options for SendGrid below depending on how we want email to appear
// code snippets found here... https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md


// SendGrid OPTION 1 - send one single email to multiple recipients ***************************************************************************
// all recipients email addresses will appear in the 'to' field on the email
// this option might be nice since everyone in the group will probably know each other
// if the group gets larger and ppl don't know each other, they might not want others to see their email address




// // SendGrid OPTION 2 - send multiple individual emails to multiple recipients*****************************************************************
// // only one recipient email will show in the 'to' field
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: [],
//   from: '',
//   subject: 'Hello world',
//   text: 'Hello plain world!',
//   html: '<p>Hello HTML world!</p>',
// };
// sgMail.sendMultiple(msg);


// // SendGrid OPTION 3 - send multiple emails to multiple recipients****************************************************************************
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// // send personalized emails to each potential user
// // personalizations array allows us to customize each email, so we can include names to make it more personable
// // need to update to, subject, and headers to grab the emails provided in the create convoy component/input fields
// const msg = {
//   personalizations: [
//     {
//       to: '',
//       subject: 'Hello recipient 1',
//       substitutions: {
//         name: 'Recipient 1',
//         id: '123',
//       },
//       headers: {
//         'X-Custom-Header': 'Recipient 1',
//       },
//       customArgs: {
//         myArg: 'Recipient 1',
//       },
//     },
//     {
//       to: 'recipient2@example.org',
//       subject: 'Hello recipient 2',
//       substitutions: {
//         name: 'Recipient 2',
//         id: '456',
//       },
//       headers: {
//         'X-Custom-Header': 'Recipient 2',
//       },
//       customArgs: {
//         myArg: 'Recipient 1',
//       },
//       sendAt: 1500077141,
//     }
//   ],
//   from: '',
//   text: 'Hello plain world!',
//   html: '<p>Hello HTML world!</p>',
// };
// sgMail.send(msg);


// send and sendMultiple methods return a Promise
// // handle success and capture errors:
// // **this is needed for all options
// sgMail
//   .send(msg)
//   .then(() => {
//     //Celebrate
//   })
//   .catch(error => {

//     //Log friendly error
//     console.error(error.toString());

//     //Extract error msg
//     const {message, code, response} = error;

//     //Extract response msg
//     const {headers, body} = response;
//   });
// // import React from "react";





