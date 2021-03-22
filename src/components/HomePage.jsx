import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=79121d9cf6a0bcf9a51dd363b9565e52',
    );

    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <div>
        <h1>Trending for today:</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies${this.props.match.url}${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
