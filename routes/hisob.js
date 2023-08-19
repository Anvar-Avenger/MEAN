const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const { User } = require('../models');
const { database } = require('../config');
const { response } = require('../utils');
const { success, fail } = response;

const router = express.Router();

router.post('/yangi', async function (req, res) {
    let body = req.body;
    let yangi = new User({
        ism: body.name,
        nom: body.username,
        pochta: body.username,
        parol: body.password
    });

    try {
        let user = await User.findOne({ nom: body.username });
        if (user) {
            return fail(res, [], "Bundan foydalanuvchi mavjud!");
        }

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(yangi.parol, salt);
        yangi.parol = hash;

        await yangi.save();

        return success(res, [], "Foydalanuvchi qo'shildi");
    } catch (e) {
        return fail(res, e.message, "Foydalanuvchi qo'shilmadi");
    }
});

router.post('/kirish', function (req, javob) {
    let { name, password } = req.body;

    User.NomOrqaliQidir(name, function (err, user) {
        if (err)
            throw err;

        if (!user) {
            return fail(javob, [], "Bunday foydalanuvchi topilmadi!")
        }

        bcrypt.compare(password, user.parol, (error, tengmi) => {
            if (error) throw error;

            if (!tengmi) {
                return fail(javob, [], "Noto\u2018g\u2018ri parol");
            }

            const token = jwt.sign(user.toJSON(), database.secret, { expiresIn: 3600 * 24 });

            success(javob, {
                token: 'JWT ' + token,
                user: {
                    id: user._id,
                    name: user.ism,
                    email: user.pochta,
                    username: user.nom
                }
            });
        });
    });
});

router.get('/muhit', passport.authenticate('jwt', { session: false }), function (sorov, javob) {
    javob.send('Foydalnuvchi muhiti');
});

module.exports = router;