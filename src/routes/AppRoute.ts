import { App } from '../App';
import { NotFount } from '../pages/NotFound';

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
    component: NotFount,
  },
};
