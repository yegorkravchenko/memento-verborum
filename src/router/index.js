import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About, exact: true },
  { path: '', component: NotFound, exact: false },
];
