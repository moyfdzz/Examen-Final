let mongoose = require( 'mongoose' );
let uuid = require( 'uuid' );

mongoose.Promise = global.Promise;

/* Tu código va aquí */

let moviesCollection = mongoose.Schema({
    film_ID: uuid(),
    film_title: String,
    year: Number,
    rating: Number
})

let Movie = mongoose.model('movie', moviesCollection);

let MovieController = {
    getAll: function() {
        return Movie.find()
            .then(movies => {
                return movies;
            })
            .catch(error => {
                throw Error(error);
            });
    },
    create: function(newMovie) {
        return Movie.create(newMovie)
            .then(nm => {
                return nm;
            })
            .catch(error => {
                throw Error(error);
            });
    },
}

module.exports = {
    MovieController
};