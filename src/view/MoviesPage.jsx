import { Component, lazy } from 'react';
import { Link } from 'react-router-dom';
import { getSearch } from '../servis/moviesApi';
import PropTypes from 'prop-types';

import queryString from 'query-string';

const Form = lazy(() =>
  import('../components/Form' /* webpackChunkName: "Layout" */),
);
class Movies extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      getSearch(query).then(response =>
        this.setState({ movies: response.data.results }),
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });

      getSearch(nextQuery)
        .then(response => this.setState({ movies: response.data.results }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;

    return (
      <>
        <Form onSubmit={this.handleChangeQuery} />

        {loading && <h1>loading...</h1>}

        {movies.length > 0 ? (
          <>
            <ul>
              {movies.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={{
                      pathname: `${match.url}/${id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2>Nothing found</h2>
        )}
      </>
    );
  }
}
Movies.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
export default Movies;
