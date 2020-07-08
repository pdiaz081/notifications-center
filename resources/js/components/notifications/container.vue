<template>
    <div class="row">
        <div class="col-12">
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
                            :key="i"
                        >
                            <v-list-item-icon @click="update(item)">
                                <v-icon  color="#3490DC" v-text="!item.status ? 'mdi-checkbox-blank-circle' : 'mdi-checkbox-blank-circle-outline'"></v-icon>
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
                    >
                        Clear All
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>

</template>

<script>
    export default {
        computed: {
            currentUserNotifications: {
                get() {
                    return this.$store.state.currentUserNotifications.notifications;
                }
            },
        },
        methods: {
            update(notification) {
                this.$store.dispatch('currentUserNotifications/updateUserNotification', notification);
            }
        },
    }
</script>
