import Home from '../pages/Home';
import About from '../pages/About';
import QuotesAll from '../pages/QuotesAll';
import AuthorsAll from '../pages/AuthorsAll';
import NotFound from '../pages/NotFound';

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/quotes', component: QuotesAll, exact: true },
  { path: '/authors', component: AuthorsAll, exact: true },
  { path: '/about', component: About, exact: true },
  { path: '', component: NotFound, exact: false },
];
