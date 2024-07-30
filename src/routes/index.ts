import Splash from "../pages/Splash";
import Help from '../pages/Help';
import Home from '../pages/Home';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Account from "../pages/Account";
import Intro from "../pages/Intro";
import Build from "../pages/Build";
import Search from "../pages/Search";
import Year from "../pages/Year";
import EraStyle from "../pages/EraStyle";
import Location from "../pages/Location";
import Philosphies from "../pages/Philosphies";
import Muthology from "../pages/Muthology";
import Manifesto from "../pages/Manifesto";
import EditProfile from "../pages/EditProfile";
import ThirdDimension from "../pages/ThirdDimension";

const coreRoutes = [
  {
    path: '/',
    title: 'Splash',
    component: Splash
  },
  {
    path: '/help',
    title: 'Help',
    component: Help
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
    path: '/account',
    title: 'Account',
    component: Account
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
    path: '/philosphies',
    title: 'Philosphies',
    component: Philosphies
  },
  {
    path: '/muthology',
    title: 'Muthology',
    component: Muthology
  },
  {
    path: '/manifesto',
    title: 'Manifesto',
    component: Manifesto
  },
  {
    path: '/edit-profile',
    title: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/intro',
    title: 'Intro',
    component: Intro
  },
  {
    path: '/third-dimension',
    title: 'ThirdDimension',
    component: ThirdDimension
  },
];

const routes = [...coreRoutes];
export default routes;