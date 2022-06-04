const axios = require('axios');
const TOKEN = process.env.TOKEN;

exports.get = (req, res, next) => {
	axios
		.get(
			'https://lobomfz.com/jenkins/job/Self%20Building%20Resume%20Pipeline/lastBuild/logText/progressiveText?start=0',
			{
				auth: {
					username: 'lobomfz',
					password: TOKEN,
				},
			}
		)
		.then((response) => {
			res.status(200).send(response.data.replace(/(?:\r\n|\r|\n)/g, '<br>'));
		})
		.catch((error) => {
			console.log(error);
		});
};
