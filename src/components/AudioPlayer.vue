<template>
	<div>
		<h4>Artist: {{artist}}</h4>
		<h4>Title: {{trackName}}</h4>
		<div class="player">
			<div>
				<div v-on:click="seek" class="player-progress" title="Time played : Total time">
					<div :style="{ width: this.percentComplete + '%' }" class="player-seeker"></div>
				</div>
				<div class="player-time">
					<div class="player-time-current">{{ currentTime }}</div>
					<div class="player-time-total">{{ durationTime }}</div>
				</div>
			</div>
			<div class="player-controls">
				<div>
					<a v-on:click.prevent="stop" title="Stop" href="#">
						<img src="../assets/icons/stop_button.svg">
					</a>
				</div>
				<div>
					<a v-on:click.prevent="playing = !playing" title="Play/Pause" href="#">
						<img v-if="!playing" src="../assets/icons/play_button.svg">
						<img v-else src="../assets/icons/pause_button.svg">
					</a>
				</div>

				<div>
					<a v-on:click.prevent="download" href="#">
						<img src="../assets/icons/download_button.svg">
					</a>
				</div>
				<div>
					<a v-on:click.prevent="innerLoop = !innerLoop" href="#">
						<img v-if="!innerLoop" src="../assets/icons/start_loop_button.svg">
						<img v-else src="../assets/icons/stop_loop_button.svg">
					</a>
				</div>
				<div>
					<a v-on:click.prevent="mute" title="Mute" href="#">
						<img v-if="!muted" src="../assets/icons/mute_button.svg">
						<img v-else src="../assets/icons/unmute_button.svg">
					</a>
				</div>
			</div>
			<input class="volumeControl" v-model.lazy.number="volume" type="range" min="0" max="100" />
			<audio :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display: none;"></audio>
		</div>
	</div>
</template>

<script>

const convertTimeHHMMSS = (val) => {
	let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

	return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};

export default {
	name: 'AudioPlayer',
	props: {
		file: {
			type: String,
			default: null
		},
		autoPlay: {
			type: Boolean,
			default: false
		},
		loop: {
			type: Boolean,
			default: false
		},
		artist: {
			type: String,
			default: null
		},
		trackName: {
			type: String,
			default: null
		}
	},
	data: () => ({
		audio: undefined,
		currentSeconds: 0,
		durationSeconds: 0,
		innerLoop: false,
		loaded: false,
		playing: false,
		previousVolume: 35,
		showVolume: false,
		volume: 100
	}),
	computed: {
		currentTime() {
			return convertTimeHHMMSS(this.currentSeconds);
		},
		durationTime() {
			return convertTimeHHMMSS(this.durationSeconds);
		},
		percentComplete() {
			return parseInt(this.currentSeconds / this.durationSeconds * 100);
		},
		muted() {
			return this.volume / 100 === 0;
		}
	},
	watch: {
		playing(value) {
			if (value) { return this.audio.play(); }
			this.audio.pause();
		},
		volume(value) {
			this.showVolume = false;
			this.audio.volume = this.volume / 100;
		}
	},
	methods: {
		download() {
			this.stop();
			window.open(this.file, 'download');
		},
		load() {
			if (this.audio.readyState >= 2) {
				this.loaded = true;
				this.durationSeconds = parseInt(this.audio.duration);
				return this.playing = this.autoPlay;
			}

			throw new Error('Failed to load sound file.');
		},
		mute() {
			if (this.muted) {
				return this.volume = this.previousVolume;
			}

			this.previousVolume = this.volume;
			this.volume = 0;
		},
		seek(e) {
			if (!this.playing || e.target.tagName === 'SPAN') {
				return;
			}

			const el = e.target.getBoundingClientRect();
			const seekPos = (e.clientX - el.left) / el.width;

			this.audio.currentTime = parseInt(this.audio.duration * seekPos);
		},
		stop() {
			this.playing = false;
			this.audio.currentTime = 0;
		},
		update(e) {
			this.currentSeconds = parseInt(this.audio.currentTime);
		}
	},
	created() {
		this.innerLoop = this.loop;
	},
	mounted() {
		this.audio = this.$el.querySelectorAll('audio')[0];
		this.audio.addEventListener('timeupdate', this.update);
		this.audio.addEventListener('loadeddata', this.load);
		this.audio.addEventListener('pause', () => { this.playing = false; });
		this.audio.addEventListener('play', () => { this.playing = true; });
	}
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

body {
	font-family: 'Nunito', sans-serif;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
}

$player-background: #fff;
$player-border-color: darken($player-background,
12%);
$player-link-color: darken($player-background,
75%);
$player-progress-color: $player-border-color;
$player-seeker-color: $player-link-color;
$player-text-color: $player-link-color;

.player-wrapper {
	background-color: $player-background;
	background-image: linear-gradient(90deg, #fff 0, darken(#fff, 12%));
	display: flex;
	justify-content: center;
	padding-bottom: 20px;
}

.player {
	background-color: $player-background;
	border: 1px solid $player-border-color;
	border-radius: 5px;
	box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
	color: $player-text-color;
	display: inline-block;
	line-height: 1.5625;
	padding: 20px;

	.volumeControl {
		width: 100%;
	}
}

.player-controls {
	display: flex;

	>div {
		border-right: 1px solid $player-border-color;

		&:last-child {
			border-right: none;
		}

		a {
			color: $player-link-color;
			display: block;
			line-height: 0;
			padding: 1em;
			text-decoration: none;
		}
	}
}

.player-progress {
	background-color: $player-progress-color;
	cursor: pointer;
	height: 50%;
	min-width: 200px;
	position: relative;

	.player-seeker {
		background-color: $player-seeker-color;
		bottom: 0;
		left: 0;
		position: absolute;
		top: 0;
	}
}

.player-time {
	display: flex; // font-size: 18px;
	justify-content: space-between;

	.player-time-current {
		font-weight: 700;
		padding-left: 5px;
	}

	.player-time-total {
		opacity: 0.5;
		padding-right: 5px;
	}
}
</style>