const mongose = require('mongoose');


const Sxema = mongose.Schema({
    ism : {
        type : String,
        require: true
    },
    pochta : {
        type : String,
        required : false
    },
    nom : {
        type : String,
        required : true
    },
    parol : {
        type : String,
        required : true
    }
});

const Foydalanuvchi = module.exports = mongose.model('User', Sxema);

module.exports.NomOrqaliQidir = function(nomi, callback) {
    const sorov = {nom : nomi};
    Foydalanuvchi.findOne(sorov, callback);
};