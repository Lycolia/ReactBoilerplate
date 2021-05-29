import { App } from '../App';
import { NotFound } from '../pages/NotFound';

/**
 * Application Routes
 */
export const AppRoute = {
  root: {
    path: '/',
    exact: true,
    component: App,
  },
  notfound: {
    path: '*',
    component: NotFound,
  },
};
