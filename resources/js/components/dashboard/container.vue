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
                    src="images.user.url"
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
                    <v-list-item-group v-model="item" color="primary">
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </div>
    </div>

</template>

<script>
    export default {
        data: () => ({
            item: 1,
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
            images: {
                user: {
                    url: '../../resources/images/user.png'
                }
            }
        }),
        computed: {
            currentUser: {
                get() {
                    return this.$store.state.currentUser.user;
                }
            }
        },
    }
</script>
