var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'events.mail.sender@gmail.com', pass: 'eventspass' } });

// setup e-mail data with unicode symbols

// send mail with defined transport object
function send(req, res, next){
	var mailOptions = {
	    from: '"E-vents" <events.mail.sender@gmail.com>', // sender address
	    to: req.body.email, // list of receivers
	    subject: 'Hello ✔', // Subject line
	    html: '<b>Hello world 🐴</b>' // html body
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    res.status(201).send('Success');
	});
}
module.exports = {
	send: send
};