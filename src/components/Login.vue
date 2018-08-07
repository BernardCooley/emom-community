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
                        <ion-label for="email">Email</ion-label>
                        <ion-input type="text" id="email" v-bind:value="user.email" v-on:input="user.email = $event.target.value"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-label for="password">Password</ion-label>
                        <ion-input type="password" id="password" v-bind:value="user.password" v-on:input="user.password = $event.target.value"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-button v-on:click="login">Log In</ion-button>
                    </ion-item>
                </ion-list>

                {{user.password}}
                {{user.email}}

            </ion-content>
        </ion-page>
    </div>
</template>

<script>
export default {

    data: function() {
        return {
            user: {}
        }
    },
    methods: {
        login: function() {
            console.log(this.user.email, this.user.password);
        }
    }
}
</script>

<style>

</style>
