const state = {
    notifications: {

    }
};
const getters = {};
const actions = {
    getUserNotifications({commit}) {
        axios.get("api/v1/user/notifications")
        .then( response => {
            commit('setUserNotifications', response.data)
        });
    },
    updateUserNotification({}, notification) {
        console.log("hello");
        axios.post('/api/v1/user/notifications/update/' + notification.id, notification)
        .then( response => {
            console.log(response)
            //window.location.reload();
        });
    },
};
const mutations = {
    setUserNotifications(state, data) {
        state.notifications = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
