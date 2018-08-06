<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="toolbar-md-primary">
                <ion-title>Music</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="content">
            <ion-card class="ionCard">
                <ion-card-header>
                    Tracks
                </ion-card-header>

                <ion-list v-for="(track, index) in Tracks" v-bind:data="track" v-bind:key="track.index">

                    <div id="audio" class="player-wrapper">
                        <audio-player v-bind:file='track.url' v-bind:artist='track.artist' v-bind:trackName='track.trackName'></audio-player>
                    </div>
                </ion-list>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>

import Tracks from '../db/tracks.json'
import AudioPlayer from './AudioPlayer'

export default {
    data() {
        return {
            Tracks
        }
    },
    components: {
        AudioPlayer
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
</style>