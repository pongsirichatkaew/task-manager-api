const sgMail = require('@sendgrid/mail');
const sendgridApiKey = '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'

sgMail.setApiKey(sendgridApiKey);

const msg = {
  to: 'pongsirichatkaew@gmail.com',
  from: 'pongsirichatkaew@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js'
};
sgMail.send(msg);
