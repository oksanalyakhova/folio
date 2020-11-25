import AppHome from '@/pages/AppHome';
import AppAbout from '@/pages/AppAbout';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/about',
        name: 'About',
        component: AppAbout
    }
];

export default routes;
