import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../components/dashboard/container";
import Notifications from "../components/notifications/container";
import Profile from "../components/profile/container";

const routes = [
    {
        component: Dashboard,
        name: "dashboard",
        path: "/"
    },
    {
        component: Notifications,
        name: "notifications",
        path: "/notifications"
    },
    {
        component: Profile,
        name: "profile",
        path: "/profile"
    }
];

export default new VueRouter({
    routes
});


