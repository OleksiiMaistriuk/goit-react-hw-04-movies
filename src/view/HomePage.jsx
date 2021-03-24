import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../servis/moviesApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await getTrending();
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies${this.props.match.url}${id}`,
                  state: { from: this.props.location },
                }}
              >
                {name || title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
