import { Component, Suspense, lazy } from 'react';
import { Link, Route } from 'react-router-dom';
import { getApiADetails } from '../../servis/moviesApi';
import routes from '../../routes';
import style from './MovieDetailsPage.module.css';
const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    id: null,
    title: null,
    vote_average: null,
    overview: null,
    poster_path: null,
    release_date: null,
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;
    const response = await getApiADetails(moviesId);
    this.setState({ ...response.data });
  }

  handeGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push({ pathname: routes.moviesPage });
  };

  render() {
    const {
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
    } = this.state;
    // const popularityToPercent = Number((popularity * 10) / 100);
    return (
      <>
        <button type="button" onClick={this.handeGoBack}>
          Go back
        </button>

        <div className={style.page}>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={title}
            />
          )}
          <div className={style.views}>
            <p>{release_date}</p>
            <h1> {title}</h1>
            <p>User score: {vote_average * 10}% </p>
            <h2>Overview </h2>
            <p>{overview || 'This movie has no overview yet.'}</p>
          </div>
        </div>

        <p>Additional information</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}${routes.cast}`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}${routes.reviews}`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr></hr>

        <Route
          path={`${this.props.match.path}${routes.cast}`}
          render={props => <Cast {...props} />}
        />
        <Route
          path={`${this.props.match.path}${routes.reviews}`}
          render={props => <Reviews {...props} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
