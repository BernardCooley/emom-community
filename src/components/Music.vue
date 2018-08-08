<template>
    <ion-content class="content" v-if="dataLoaded">
        <ion-list v-for="(track, index) in tracks" v-bind:data="track" v-bind:key="track.index">
            <ion-card class="ionCard">
                <ion-card-header>
                    <h4>Artist: {{track.artist}}</h4>
                    <h4>Title: {{track.title}}</h4>
                </ion-card-header>
                <div id="audio" class="player-wrapper">
                    <audio-player v-bind:file='track.trackUrl' v-bind:artist='track.artist' v-bind:title='track.title' v-bind:artworkUrl='track.artworkUrl'></audio-player>
                </div>
            </ion-card>
        </ion-list>
    </ion-content>
</template>

<script>

import AudioPlayer from './AudioPlayer'
import db from "../firestore/firebaseInit"
import firebase from "firebase"

export default {
    name: 'music',
    data: function() {
        return {
            tracks: [],
            dataLoaded: false
        }
    },
    components: {
        AudioPlayer
    },
    methods: {
        loadTracks: function() {
            this.tracks = []
            db.collection('tracks').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'artist': doc.data().artist,
                        'title': doc.data().title,
                        'trackUrl': doc.data().trackUrl,
                        'artworkUrl': doc.data().artworkUrl
                    }
                    this.tracks.push(data)
                })
                if (this.tracks) {
                    this.dataLoaded = true
                }
            })
        }
    },
    beforeCreate() {

    },
    created() {
        this.loadTracks();
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

.loggedInUser {
    float: right;
    z-index: 5;
    font-size: 15px;
    color: white;
}
</style>