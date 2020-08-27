
import { ConfigRoute } from './types';
import Home from '../screens/Home';


const routesPath = {
    home: '/',
    albums: '/albums',
};

const routes: ConfigRoute[] = [
    {
        component: Home,
        path: routesPath.home,
        exact: true,
        id: 'Home',
    },
];

export { routes, routesPath };