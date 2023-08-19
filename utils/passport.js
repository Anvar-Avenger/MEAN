const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const database = require('../config/database');
const {User} = require('../models');


function apply() {
    let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: database.secret
    }

    passport.use(new JwtStrategy(opts, function (payload, done) {
        User.findOne({ id: payload.sub }, function (err, user) {
            if (err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}

module.exports = {
    initialize: () => passport.initialize(),
    session: () => passport.session(),
    apply
}