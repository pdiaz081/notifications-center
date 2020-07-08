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
    updateUser({}, user) {
        axios.post('/api/v1/user/update/' + user.id, user)
        .then( response => {
            console.log(response)
            window.location.href = "/";
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
