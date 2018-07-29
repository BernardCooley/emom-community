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

                <ion-list v-for="(track, index) of musicFiles">
                    <div class="trackContainer">
                        <h4>{{track.artist}} - {{track.trackName}}</h4>
                        <audio controls class="track">
                            <source v-bind:src='track.url' type="audio/mpeg"> 
                            Your browser does not support the audio element.
                        </audio>
                        <ion-button>Save</ion-button>
                        <ion-button>More info</ion-button>
                    </div>
                </ion-list>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>

export default {
    data() {
        return {
            musicFiles: [
                {
                    "artist": "Tape Twelve",
                    "trackName": "Slice",
                    "url": "../assets/music/tape_twelve_slice.mp3"
                },
                {
                    "artist": "Tape Twelve",
                    "trackName": "Temper",
                    "url": "../assets/music/tape_twelve_temper.mp3"
                },
                {
                    "artist": "Tape Twelve",
                    "trackName": "Temper",
                    "url": "../assets/music/tape_twelve_temper.mp3"
                },
                {
                    "artist": "Tape Twelve",
                    "trackName": "Temper",
                    "url": "../assets/music/tape_twelve_temper.mp3"
                },
                {
                    "artist": "Tape Twelve",
                    "trackName": "Temper",
                    "url": "../assets/music/tape_twelve_temper.mp3"
                },
                {
                    "artist": "Tape Twelve",
                    "trackName": "Temper",
                    "url": "../assets/music/tape_twelve_temper.mp3"
                },
                {
                    "artist": "Tape Twelve",
                    "trackName": "Temper",
                    "url": "../assets/music/tape_twelve_temper.mp3"
                }
            ]
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
</style>