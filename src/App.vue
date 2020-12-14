<template>
	<div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
		<div class="row">
			<VideoDetail v-bind:video="selectedVideo"></VideoDetail>
		<VideoList
		v-bind:videos="videos"
		@videoSelect="onVideoSelect"
		></VideoList>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// const API_KEY = 'AIzaSyBp6Kf8Ns8lh-AjdT85Di-pWSDUfOWCxs4';
const API_KEY = 'AIzaSyDTIdqZUEvOta31aY6hc-3RkcON9EDNsKE';

export default {
	name: 'App',
	components: {
		SearchBar,
		VideoList,
		VideoDetail
	},
		data() {
			return {  
				videos: [],
				selectedVideo: null
				}
		},
	
	methods: {
	onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        })
        .then(response => {
					// console.log(response)
          this.videos = response.data.items;
        });
		},
		onVideoSelect(video) {
			//updates property of selectedVideo
			this.selectedVideo = video;
		}
	}
}
</script>