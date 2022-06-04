const axios = require('axios');
const TOKEN = process.env.TOKEN;

exports.post = (req, res, next) => {
	axios
		.post(
			'https://lobomfz.com/jenkins/job/Self%20Building%20Resume%20Pipeline/build',
			{},
			{
				auth: {
					username: 'lobomfz',
					password: TOKEN,
				},
			}
		)
		.then((response) => {
			res.status(200).send(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
