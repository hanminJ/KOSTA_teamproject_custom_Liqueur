var express = require('express')
, passport = require('passport')
, session = require('express-session')
, NaverStrategy = require('../lib/index.js').Strategy;

// @todo Use single `var` keyword?
var client_id = 'UkNsTI7sArBNgz5e9mWw';
var client_secret = 'uWxCS6M9tH';
var callback_url = 'http://127.0.0.1:8080/callback';

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new NaverStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: callback_url
	// @todo Suggest to use `state` parameter?
}, function(accessToken, refreshToken, profile, done) {
	process.nextTick(function () {
		// @todo Remove necessary comment
		//console.log("profile=");
		//console.log(profile);
		// data to be saved in DB
		user = {
			name: profile.displayName,
			email: profile.emails[0].value,
			username: profile.displayName,
			provider: 'naver',
			naver: profile._json
		};
		//console.log("user=");
		//console.log(user);
		return done(null, profile);
	});
}));

var app = express();


app.use(session({secret: 'keyboard cat',
				resave: true,
    			proxy: true,
				saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views/');

app.get('/', function(req, res){
	res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res) {
	console.log(req.user);
	res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
	res.render('login', { user: req.user });
});

// Setting the naver oauth routes
app.get('/auth/naver', 
	passport.authenticate('naver', null), function(req, res) { // @todo Additional handler is necessary. Remove?
    	console.log('/auth/naver failed, stopped');
    });

// creates an account if no account of the new user
app.get('/auth/naver/callback', 
	passport.authenticate('naver', {
        failureRedirect: '#!/auth/login'
    }), function(req, res) {
    	res.redirect('/'); 
    });

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

app.listen(8080);

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.redirect('/login');
}

app.get('/callback', (req, res, next) => {
    passport.authenticate('naver', (err, user) => {
        if (err) {
            console.log(err);
        } else {
            var result = {
                email: user._json.email,
                profile_image: user._json.profile_image,
            };
            console.log(user._json);
            res.send(result);
        }
    })(req, res);
});