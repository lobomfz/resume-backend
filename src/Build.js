const axios = require('axios');
const TOKEN = process.env.TOKEN;

exports.get = (req, res, next) => {
	axios
		.get(
			'https://lobomfz.com/jenkins/job/Self%20Building%20Resume%20Pipeline/lastBuild/buildNumber',
			{
				auth: {
					username: 'lobomfz',
					password: TOKEN,
				},
			}
		)
		.then((response) => {
			res.send(JSON.stringify(response.data));
		})
		.catch((error) => {
			console.log(error);
		});
};
