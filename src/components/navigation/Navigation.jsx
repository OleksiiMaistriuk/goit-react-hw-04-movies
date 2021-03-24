import { Link } from 'react-router-dom';
import routes from '../../routes';
import style from './Navigation.module.css';
const Navigation = () => (
  <ul className={style.list}>
    <li>
      <Link exact to={routes.homePage}>
        Home
      </Link>
    </li>
    <li className={style.item}>
      <Link exact to={routes.moviesPage}>
        Movies
      </Link>
    </li>
  </ul>
);

export default Navigation;
