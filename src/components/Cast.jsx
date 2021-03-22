import { Component } from 'react';
import axios from 'axios';
class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await axios
      .get(
        `  https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=79121d9cf6a0bcf9a51dd363b9565e52`,
      )
      .then(response => this.setState({ cast: response.data.cast }));

    console.log(this.state.cast);
  }

  render() {
    return (
      <>
        {(this.state.cast.length && (
          <ul>
            {this.state.cast.map(actor => (
              <li key={actor.id}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    width="200"
                    alt={actor.name}
                  />
                )}
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )) || <p>The resource you requested could not be found.</p>}
      </>
    );
  }
}

export default Cast;
