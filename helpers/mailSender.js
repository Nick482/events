var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'events.mail.sender@gmail.com', pass: 'eventspass' } });

function send(req, res, next){
	var mailOptions = {
	    from: '"E-vents" <events.mail.sender@gmail.com>',
	    to: req.body.email,
	    subject: 'Hello ✔',
	    html: '<b>Hello world 🐴</b>'
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