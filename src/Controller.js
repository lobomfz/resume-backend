const axios = require('axios');
const TOKEN = process.env.TOKEN;

exports.get = (req, res, next) => {
	axios
		.get(
			'http://lobomfz.com/jenkins/job/Self%20Building%20Resume%20Pipeline/lastBuild/logText/progressiveText?start=0',
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
