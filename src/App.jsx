import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const Layout = lazy(() =>
  import('./components/Layout' /* webpackChunkName: "Layout" */),
);
const HomePage = lazy(() =>
  import('./view/HomePage' /* webpackChunkName: "HomePage" */),
);
const Movies = lazy(() =>
  import('./view/MoviesPage' /* webpackChunkName: "Movies" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './view/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const App = () => (
  <>
    <Suspense fallback={<h1>loading...</h1>}>
      <Layout>
        <Switch>
          <Route exact path={routes.homePage} component={HomePage} />
          <Route path={routes.detailsView} component={MovieDetailsPage} />
          <Route path={routes.moviesPage} component={Movies} />
        </Switch>
      </Layout>
    </Suspense>
  </>
);

export default App;
