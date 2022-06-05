const axios = require('axios');
const TOKEN = process.env.TOKEN;

const API_ENDPOINT =
	process.env.NODE_APP_API_ENDPOINT || 'https://lobomfz.com/';

const username = process.env.JENKINS_USERNAME || 'lobomfz';

const jobName =
	process.env.JENKINS_JOB_NAME || 'Self%20Building%20Resume%20Pipeline';

exports.get = (req, res, next) => {
	axios
		.get(
			`${API_ENDPOINT}/jenkins/job/${jobName}/lastBuild/logText/progressiveText?start=0`,
			{
				auth: {
					username: username,
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
