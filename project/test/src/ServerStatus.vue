<template>
	<div>
		<p>Server srtatus {{ status }}</p>
		<hr>
		<button @click="changeStatus">click</button>
	</div>
</template>


<script>
	export default {

		data: function() {
			return {
				status: 'Critical',
			}
		},

		methods: {
			changeStatus () {
				this.status = 'Normal';
			},

		}



	}


</script>

<style scoped>

	div {
		border: 1px solid red;
	}

</style>
