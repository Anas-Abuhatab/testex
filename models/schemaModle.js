'use strict';

const mongoose = require('mongoose');


const pieceSchema = mongoose.Schema ({

    strDrink : String,
    strDrinkThumb : String,
    description :String,
    email:String,
    idDrink : String
});

const UserModle =mongoose.model('UserModle',pieceSchema)

module.exports = {
    UserModle
};