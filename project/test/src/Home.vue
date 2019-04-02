<template>

	<div>

		<app-headline></app-headline>
		<app-server-status v-for="server in 5"></app-server-status>
		<app-footer></app-footer>
	</div>

</template>
<script>
	import Footer from './Footer.vue'
	import Headline from './Headline.vue' 
	import ServerStatus from './ServerStatus.vue';
	export default {	
			components: {
				'app-server-status': ServerStatus,
				'app-headline': Headline,
				'app-footer': Footer,
			}

	}


</script>
