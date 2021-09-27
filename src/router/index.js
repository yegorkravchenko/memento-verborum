import About from '../pages/About';
import Home from '../pages/Home';

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About, exact: true },
];
