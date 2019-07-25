import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/authredirect',
        component: () =>
            import ('@/views/login/authredirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/views/errorPage/401'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            name: 'Dashboard',
            meta: { title: '控制面板', icon: 'dashboard', noCache: true }
        }]
    },

    {
        path: '/databoard',
        component: Layout,
        redirect: '/databoard/user',
        name: 'Databoard',
        meta: { title: '数据面板', icon: 'list' },
        children: [{
                path: 'user',
                name: 'User',
                component: () =>
                    import ('@/views/databoard/user/index'),
                meta: { title: '注册用户', icon: 'user' }
            },
            {
                path: 'expense',
                name: 'Expense',
                component: () =>
                    import ('@/views/databoard/expense/index'),
                meta: { title: '消费记录', icon: 'guide' }
            },
            {
                path: 'withdrawal',
                name: 'Withdrawal',
                component: () =>
                    import ('@/views/databoard/withdrawal/index'),
                meta: { title: '提现记录', icon: 'tab' }
            },
            {
                path: 'dynamic',
                name: 'Dynamic',
                component: () =>
                    import ('@/views/databoard/dynamic/index'),
                meta: { title: '提现说明', icon: 'example' }
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})