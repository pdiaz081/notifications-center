<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list dense>
                <v-list-item>
                    <router-link to="/dashboard">TEST</router-link>
                </v-list-item>
                <v-list-item to="/dashboard" link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/notifications" link>
                    <v-list-item-action>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/profile" link>
                    <v-list-item-action>
                        <v-icon>mdi-account-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="logout">
                    <v-list-item-action>
                        <v-icon>mdi-power</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Log Out {{ currentUser.first }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="#3490DC"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Notifications Center</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container
                class="fill-height"
                fluid
            >

                <router-view></router-view>

            </v-container>
        </v-main>
        <v-footer
            color="#3490DC"
            app
        >
            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        computed: {
            currentUser: {
                get() {
                    return this.$store.state.currentUser.user;
                }
            }
        },
        methods: {
            logout() {
                this.$store.dispatch("currentUser/logoutUser");
            }
        },
        created() {
            if (localStorage.hasOwnProperty("notifications_token")) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("notifications_token");
                this.$store.dispatch('currentUser/getUser');
            } else {
                window.location.replace("/login");
            }
        }
    }
</script>
