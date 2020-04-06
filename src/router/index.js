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
            redirect: '/problem'
        },
        {
            path: '/',
            component: Home,
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: { title: '系统首页' }
                },
                {
                    path: '/problem',
                    component: Problem,
                    meta: { title: '问题'},
                },
                {
                    path: '/problem/:problemId',
                    component: ProblemDetail,
                    meta: { title: '问题详情' },
                }

            ]
        },
        {
            path: '/login',
            component: Login,
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
