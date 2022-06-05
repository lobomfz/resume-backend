const Console = require('./Console');
const Build = require('./Build');
const NewBuild = require('./NewBuild');
const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 1,
	message: 'Too many build requests.',
	standardHeaders: true,
	legacyHeaders: false,
});

module.exports = (app) => {
	app.get('/api/console', Console.get);
	app.get('/api/build', Build.get);
	app.post('/api/newbuild', rateLimiter, NewBuild.post);
};
