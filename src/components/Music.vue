<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="toolbar-md-primary">
                <ion-title>Shared tracks</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="content">

            <!--<ion-card-header><h2>Shared tracks</h2></ion-card-header>-->

            <ion-list v-for="(track, index) in Tracks" v-bind:data="track" v-bind:key="track.index">
                <ion-card class="ionCard">
                    <ion-card-header>
                        <h4>Artist: {{track.artist}}</h4>
                        <h4>Title: {{track.trackName}}</h4>
                    </ion-card-header>
                    <div id="audio" class="player-wrapper">
                        <audio-player v-bind:file='track.url' v-bind:artist='track.artist' v-bind:trackName='track.trackName' v-bind:artworkUrl='track.artworkUrl'></audio-player>
                    </div>
                </ion-card>
            </ion-list>

            <ion-button v-on:click="getTrackData"></ion-button>

        </ion-content>
    </ion-page>
</template>

<script>

import Tracks from '../db/tracks.json'
import AudioPlayer from './AudioPlayer'
import db from "../firestore/firebaseInit";
import firebase from "firebase";

export default {
    data() {
        return {
            Tracks
        }
    },
    components: {
        AudioPlayer
    },
    methods: {
        getTrackData: function() {
            db.collection("tracks").where('artist', '==', 'Tape Twelve').get().then(doc => {
                console.log(doc)
            })
        }
    }
}

</script>

<style>
.track {
    margin: auto;
}

.trackContainer {
    margin: 5px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.1);
}

.content {
    background-color: white;
}

.card-header {
    background-color: #F4F4F4;
}
</style>