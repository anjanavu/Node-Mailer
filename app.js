const express = require('express')
const app = express()
const nodemailer=require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vuanjana2000@gmail.com',
        pass:'vlhd lyhh uxvc raeu'
    }
});

let mailDetails = {
    from: 'vuanjana2000@gmail.com',
    to: 'anjanavu2000@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent successfully');
    }
});



const PORT = 3541;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})