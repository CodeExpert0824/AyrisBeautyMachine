import Splash from "../pages/Splash";
import Home from '../pages/Home';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Intro from "../pages/Intro";
import Build from "../pages/Build";
import Search from "../pages/Search";
import Year from "../pages/Year";
import EraStyle from "../pages/EraStyle";
import Muthology from "../pages/Muthology";
import Location from "../pages/Location";

const coreRoutes = [
  {
    path: '/',
    title: 'Splash',
    component: Splash
  },
  {
    path: '/home',
    title: 'Home',
    component: Home
  },
  {
    path: '/build',
    title: 'Build',
    component: Build
  },
  {
    path: '/search',
    title: 'Search',
    component: Search
  },
  {
    path: '/register',
    title: 'Register',
    component: Register
  },
  {
    path: '/login',
    title: 'Login',
    component: Login
  },
  {
    path: '/year',
    title: 'Year',
    component: Year
  },
  {
    path: '/era-style',
    title: 'EraStyle',
    component: EraStyle
  },
  {
    path: '/location',
    title: 'Location',
    component: Location
  },
  {
    path: '/muthology',
    title: 'Muthology',
    component: Muthology
  },
  {
    path: '/intro',
    title: 'Intro',
    component: Intro
  }
];

const routes = [...coreRoutes];
export default routes;