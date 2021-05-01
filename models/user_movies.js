const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsermoviesSchema = new Schema({
    email: String,
    movieid : String,
    favourite : Number,
    review : String,
    rating : Number
})

const Usermovies = mongoose.model('Usermovies', UsermoviesSchema);

module.exports = Usermovies;