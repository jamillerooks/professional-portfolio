const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
	let data = req.body;
	if (
		data.name.length === 0 ||
		data.email.length === 0 ||
		data.message.length === 0
	) {
		return res.json({ msg: 'Please complete all the fields.' });
	}

	//Create the transporter object
	let smtpTransporter = nodemailer.createTransport({
		service: 'gmail',
		//port: 465,
		auth: {
			user: 'jamillerooks@gmail.com',
			pass: '*******',
		},
	});

	//Set the mailing options object
	let mailOptions = {
		from: data.email,
		to: 'jamillerooks@gmail.com',
		subject: `message from ${data.name}`,
		html: `
    <h3>Information</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Name: ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
    `,
	};
	//Deliver the message with the send mail method
	smtpTransporter.sendEmail(mailOptions, (error) => {
		try {
			if (error)
				return res.status(400).json({ msg: 'Please complete in all fields.' });
			res.status(200).json({ msg: 'Thank you for contacting Jamille!' });
		} catch (error) {
			if (error)
				return res.status(500).json({ msg: 'There is a server error' });
		}
	});
});

module.exports = router;
