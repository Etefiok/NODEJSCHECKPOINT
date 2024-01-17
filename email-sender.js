const nodemailer = require('nodemailer');

//transporter using your email service (e.g., Gmail)
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'diligentsamuel@gmail.com', 
    pass: '' 
  }
});

//email data
let mailOptions = {
  from: 'diligentsamuel@gmail.com', 
  to: 'ritibenson444@gmail.com', 
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
