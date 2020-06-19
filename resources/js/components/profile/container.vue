<template>
    <div>
        <div class="form-group">
            <label for="exampleInputFirst1">First Name</label>
            <input type="email" class="form-control" v-model="currentUser.first" id="exampleInputFirst1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputLast1">Last Name</label>
            <input type="email" class="form-control" v-model="currentUser.last" id="exampleInputLast1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="currentUser.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <button type="submit" @click="update" class="btn btn-primary">Update</button>
    </div>
</template>

<script>

    export default {
        computed: {
            currentUser: {
                get() {
                    return this.$store.state.currentUser.user;
                }
            }
        },
        methods: {
            update() {
                this.$store.dispatch('currentUser/updateUser', this.currentUser);
            }
        },
    }
</script>
