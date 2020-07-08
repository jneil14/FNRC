const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/api/form', (req, res) => {
    console.log(req.body);

    let data = req.body;
    const htmlEmail = `
         <h3>Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Phone: ${data.phone}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
    `;


    const transporter = nodemailer.createTransport({
        service:'Gmail',
        port: 465,
        auth:{
            user: 'footprintsnursing@gmail.com',
            pass: 'marilee18'
      }
    });


    // let smtpTransport = nodemailer.createTransport({
    //     service:'Gmail',
    //     port: 465,
    //     auth:{
    //         user: 'julianavenger@gmail.com',
    //         pass: 'dzhongkitz'
    //     }
    // });


    let mailOptions = {
      from: data.email,
      to: 'footprintsnursing@gmail.com',
      replyTo: data.email,
      subject: `Message from ${data.name}`,
      html: htmlEmail
    };


    transporter.sendMail(mailOptions, (err, info) => {
        
        if(err) {
            return console.log(err)
        }
        else {
            console.log('Message sent: %s', info.message )
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        }
    })

    // transporter.close();

})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})