<template>
    <div class="loginContainer">
        <ion-page>
            <ion-header>
                <ion-toolbar class="toolbar-md-primary">
                    <ion-title>Login</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content class="content">

                <ion-list>
                    <ion-item>
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="user.name">
                    </ion-item>

                    <ion-item>
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="user.password">
                    </ion-item>
                    <ion-item>
                        <ion-button v-on:click="login">Log In</ion-button>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-page>
    </div>
</template>

<script>
export default {

    data: function() {
        return {
            user: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        login: function() {
            console.log(this.user.name, this.user.password);
        }
    }
}
</script>

<style>

</style>
