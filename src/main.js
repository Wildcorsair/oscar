// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import User from './components/User'
import Welcome from './components/Welcome'

Vue.use(vueRouter)
Vue.use(vueResource)

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: User},
        {path: '/welcome', component: Welcome}
    ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
})*/

new Vue({
    router,
    template: `
        <div id="app">
            <ul>
                <li><router-link to="/">Users</router-link></li>
                <li><router-link to="/welcome">Welcome</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    `
}).$mount('#app');
