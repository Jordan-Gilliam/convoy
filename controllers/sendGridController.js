const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Defining methods for the sendGridController
module.exports = {

  sendEmail: function(req, res, email) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // // SendGrid OPTION 2 - send multiple individual emails to multiple recipients*****************************************************************
    // convoyID = req.body.convoy;
    // console.log('convoyID: ' + convoyID);
    email = req.body.to;
    console.log(email);
    // var emailStr = email.join();
    // only one recipient email will show in the 'to' field
    const msg = {
      to: 'mbradleystylist@gmail.com',
      from: process.env.EMAIL,
      subject: "Youve been invited to join Convoy!",
      text: "Welcome",
      html: "<div><img class='max-width' border='0' style='display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;' src='https://marketing-image-production.s3.amazonaws.com/uploads/6afc0d2ce30c2de76f446f50dacefaedfc20840157a74326236d77705a88dad9a1c4bf075eee479d22e7bb7abff1af0588b362049b385dd881a8e09b7339c909.png' alt='Convoy Logo'><h1 style='text-align: center'>Hello and Welcome!</h1><h2 style='text-align: center'>Your friend has invited you to join a travel group on Convoy!</h2><a href='https://convoy-mfbradley.c9users.io/signup/${convoyID}' style='background-color:#ff0000;border:1px solid #333333;border-color:#333333;border-radius:6px;border-width:1px;color:#ffffff;display:inline-block;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:normal;letter-spacing:0px;line-height:16px;padding:12px 18px 12px 18px;text-align:center;text-decoration:none' target='_blank'>Click to Accept</a></div>",
    };
    
    console.log(msg);
    sgMail.sendMultiple(msg);
    // sgMail.send(msg).then(console.log.bind(console)).catch(console.log.bind(console));
    
   res.send("great success!");
  }
};


