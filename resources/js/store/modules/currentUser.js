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

                window.location.href = "/app";
            }
        });
    },
    updateUser({}, user) {
        axios.post('/api/v1/user/update/' + user.id, user)
        .then( response => {
            console.log(response)
            window.location.href = "/dashboard";
        });
    },
    logoutUser() {

        //remove token
        localStorage.removeItem("notifications_token");

        window.location.href = "/login";
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
