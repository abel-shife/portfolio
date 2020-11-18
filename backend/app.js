const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/contactAbel', (req,res)=>{
    const transporter = nodemailer.createTransport({
        port: '3000',
        host: 'localhost',
        tls: {
          rejectUnauthorized: false
        },
      });
    
      var message = {
        from: 'abelshifeg@gmail.com',
        to: 'tatuyeabel@gmail.com',
        subject: 'Confirm Email',
        text: 'Please confirm your email',
        html: '<p>Please confirm your email</p>'
      };
    
      transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
});

app.listen(3000, ()=> console.log('started'));