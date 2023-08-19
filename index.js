const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongose = require('mongoose');

const { database } = require('./config');
const { hisob, asosiy } = require('./routes');
const passport = require('./utils/passport');


const ilova = express();

function setup() {
    ilova.use(passport.initialize());
    ilova.use(passport.session());
    passport.apply();

    ilova.use(cors());
    ilova.use(bodyparser.json());
    ilova.use(express.urlencoded({ extended: false }));

    ilova.use(cors());
    ilova.use(express.static(path.join(__dirname, 'fayllar')));

    ilova.get('/', asosiy);
    ilova.use('/hisob', hisob);
}

function main() {
    setup();

    const port = process.env.PORT || 3000;
    mongose.connect(database.url, { useNewUrlParser: true, useUnifiedTopology: true });

    mongose.connection.on('connected', function () {
        console.log('Baza muvafaqqiyatli ulandi');
    });

    mongose.connection.on('error', function (xato) {
        console.log('Bazaga ulanishda xatolik yuz berdi:' + xato);
        // process.exit(1);
    });

    ilova.listen(port, () => console.log(`Server ${port} - portda ishga tushdi!`));
}

main();