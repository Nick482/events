var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'events.mail.sender@gmail.com', pass: 'eventspass' } });

function send(req, res, next){
	var mailOptions = {
	    from: '"E-vents" <events.mail.sender@gmail.com>',
	    to: req.body.email,
	    subject: 'Hello ✔',
	    html: '<h1>Thank you for registering!</h1><p>Hello, ' + req.body.firstName + '. Thank you for using our service. ' +
	    'You have signed up for ' + req.body.event.title + '</p>'
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