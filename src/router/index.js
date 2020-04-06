import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/page/Dashboard';
import Login from '../components/page/Login';
import Problem from '../components/page/Problem';
import Home from '../components/common/Home';
import ProblemDetail from '../components/page/ProblemDetail';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: Home,
            meta: { title: 'Home' },
            children: [
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: { title: 'Home' }
                },
                {
                    path: '/problem',
                    component: Problem,
                    meta: { title: 'Problem'},
                },
                {
                    path: '/problem/:problemId',
                    component: ProblemDetail,
                    meta: { title: 'ProblemDetail' },
                }

            ]
        },
        {
            path: '/login',
            component: Login,
            meta: { title: 'Login' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
