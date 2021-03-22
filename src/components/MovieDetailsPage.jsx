import axios from 'axios';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
class Detais extends Component {
  state = {
    poster_path: '',
    title: null,
    overview: null,
    genres: [],
    vote_average: null,
    release_date: '',
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=79121d9cf6a0bcf9a51dd363b9565e52`,
      )
      .then(response => {
        this.setState({ ...response.data });
      })
      .catch(error => console.log(error));
    console.log(this.state);
    console.log(this.props.match.url);
    console.log(movieId);
  }

  render() {
    const {
      poster_path,
      title,
      vote_average,
      release_date,
      overview,
      genres,
    } = this.state;
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt={title}
        />
        <h1> {title}</h1>
        <p>Rating: {vote_average}</p>
        <p>
          Genres:
          {genres.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </p>
        <p>Release date: {release_date}</p>
        <p>Overview: {overview}</p>

        <h2>Adittional information</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </div>
    );
  }
}
export default Detais;
