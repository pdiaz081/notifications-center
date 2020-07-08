import Vue from "vue";
import Vuex from "vuex";

import currentUser from "./modules/currentUser";
import currentUserNotifications from "./modules/currentUserNotifications";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        currentUser,
        currentUserNotifications
    }
})
