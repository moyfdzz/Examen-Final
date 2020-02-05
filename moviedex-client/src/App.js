import React from 'react';
import './App.css';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      peliculas : []
    }
  }

  fetchMovies = () => {
    let url = '/api/moviedex';

    let settings = {
      method: 'GET',
      headers: {}
    }

    fetch(url, settings)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error();
      })
      .catch(error => {
        setAlertMessage('Error getting the movies.');
        setShowAlert(true);
        console.log(error);
      })
  }

  postMovie = (newMovie) => {
    let url = '/api/moviedex';

    let settings = {
      method: 'POST',
      headers: {}
    }

    fetch(url, settings)
      .then(response => {
        if (response.ok) {
          peliculas.push(newMovie);
          fetchMovies();
        }

        throw new Error();
      })
      .catch(error => {
        setAlertMessage('Error adding the movie.');
        setShowAlert(true);
        console.log(error);
      })
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
