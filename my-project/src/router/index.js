import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);
const customers = () => import("../components/custom.vue")
const about = () => import("../components/about.vue")
const add = () => import("../components/add.vue")
const detais = () => import("../components/details.vue")
const edit = () => import("../components/edit.vue")
const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: "/",
            name: "customers",
            component: customers
        }, {
            path: "/about",
            name: "about",
            component: about,
            children: [{
                path: "/customer",
                component: customers
            }]
        },
        {
            path: '/add',
            name: "add",
            component: add
        },
        {
            path: '/customer/:id',
            name: "",
            component: detais
        },
        {
            path: "/edit/:id",
            component: edit
        }
    ]
})
export default router;