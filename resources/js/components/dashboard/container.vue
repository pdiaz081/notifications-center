<template>
    <div class="row">
        <div class="col-6">
            <v-card
                class="mx-auto"
                max-width="full"
            >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src=""
                >
                    <v-card-title>{{ currentUser.first }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">{{ currentUser.first }} {{ currentUser.last }}</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>{{ currentUser.email }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="#3490DC"
                        right
                        text
                        to="/profile"
                    >
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <div class="col-6">
            <v-card
                class="mx-auto"
                max-width="full"
                tile
            >
                <v-list rounded>
                    <v-subheader>Notifications</v-subheader>
                    <v-list-item-group  color="primary">
                        <v-list-item
                            v-for="(item, i) in currentUserNotifications"
                            v-if="!item.status"
                            :key="i"
                        >
                            <v-list-item-icon>
                                <v-icon color="#3490DC" v-text="!item.status ? 'mdi-checkbox-blank-circle' : 'mdi-checkbox-blank-circle-outline'"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.notifications"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <v-card-actions>
                    <v-btn
                        color="#3490DC"
                        right
                        text
                        to="/notifications"

                    >
                        Manage Notifications
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>

</template>

<script>
    export default {
        computed: {
            currentUser: {
                get() {
                    return this.$store.state.currentUser.user;
                }
            },
            currentUserNotifications: {
                get() {
                    return this.$store.state.currentUserNotifications.notifications;
                }
            },
        },
        methods: {
            update() {
                this.$store.dispatch('currentUserNotifications/updateUserNotification', this.currentUserNotifications);
            }
        },
    }
</script>
