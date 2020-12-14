import Vue from 'vue';
import App from './App';

new Vue ({
	el: '#app', //equivalent to .$mount('#app') 
	render: function(h) {
		return h(App)
	}
	// equivalent to:
	// render: h => h(App)
})