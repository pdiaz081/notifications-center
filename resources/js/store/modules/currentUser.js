const state = {
    user: {

    }
};
const getters = {};
const actions = {
    getUser({commit}) {
        axios.get("api/v1/user/current")
        .then( response => {
            commit('setUser', response.data)
        });
    },
    loginUser({}, user) {
        axios.post('/api/v1/user/login', {
            email: user.email,
            password: user.password
        })
        .then( response => {
            if(response.data.access_token) {

                //save token
                localStorage.setItem(
                    "notifications_token",
                    response.data.access_token
                );

                window.location.replace("/app");
            }
        });
    },
    logoutUser() {

        //remove token
        localStorage.removeItem("notifications_token");

        window.location.replace("/login");
    }
};
const mutations = {
    setUser(state, data) {
        state.user = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
