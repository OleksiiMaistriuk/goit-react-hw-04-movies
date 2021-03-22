import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

import notFound from './components/notFound';
import detailsView from './components/MovieDetailsPage';
// import MoviesPage from './components/MoviesPage';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/movies"> Movies </Link>
        </li>
      </ul>
      <Switch>
        {/* <Route exact path="/movies" component={MoviesPage} /> */}
        <Route path="/movies/:movieId" component={detailsView} />
        <Route exact path="/" component={HomePage} />
        <Route component={notFound} />
      </Switch>
    </div>
  );
};
export default App;
