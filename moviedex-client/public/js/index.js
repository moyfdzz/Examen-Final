function fetchMovies() {
    let url = '/api/moviedex';

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function(responseJSON) {
            console.log(responseJSON);
            displayMovies(responseJSON);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function postMovie(newMovie) {
    let url = '/api/moviedex';

    $.ajax({
        url: url,
        method: "POST",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(newMovie),
        success: function(responseJSON) {
            console.log(responseJSON);
            fetchMovies();
        },
        error: function(err) {
            if (err.status == 406) {
                alert('Error: Did not receive enough information to add a movie.');
            } else {
                alert('Error: There was an error trying to add a movie.');
            }

            console.log(err);
        }
    });
}

function displayMovies(responseJSON) {
    $('#moviesList').empty();

    responseJSON.forEach((movie) => {
        $('#moviesList').append(`
            <div class="movie">
                <div>
                    <h2>${movie.film_title}</h2>
                    <p>Year: ${movie.year}</p>
                    <p>Rating: ${movie.rating}</p>
                </div>
            </div>
        `);
    });
}

function watchForms() {
    $('#postMovie').on('submit', function(event) {
        event.preventDefault();

        let film_title = $('#titlePost').val();
        let year = $('#yearPost').val();
        let rating = $('#ratingPost').val();

        console.log('ayaya');

        if (film_title === '' || year === '' || rating === '') {
            alert('Please type in all the information of the movie.');

            return;
        }

        $('#titlePost').val('');
        $('#yearPost').val('');
        $('#ratingPost').val('');

        let newMovie = {
            film_title: film_title,
            year: year,
            rating: rating
        }

        postMovie(newMovie);
    });
}

function init() {
    fetchMovies();
    watchForms();
}

init();