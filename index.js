const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

require('./models/User');
require('./models/Survey');
require('./models/Post');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/postRoutes')(app);

app.use('/auth/google', proxy({ target: 'http://localhost:5000' }));
app.use('/api/*', proxy({ target: 'http://localhost:5000' }));

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(process.env.PORT || 5000, function() {
	console.log(
		'Express server listening on port %d in %s mode',
		this.address().port,
		app.settings.env
	);
});
