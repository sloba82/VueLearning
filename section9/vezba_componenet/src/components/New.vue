<template>
    <div>
      <h3>New Quote</h3>
      <p></p>
      <button @click="counter++">Incrise</button>
      <p> {{ counter }}</p>
    </div>
</template>

<script>

export default {


	data: function (){
		return {
			counter: 1,
		}
	},

	destroyed(){
		console.log('Distroyed');
	},

	deactiveted() {
	 	console.log('deactiveted');
	},
	activeted() {
		console.log('Activated');
	}

}

</script>

<style scoped>

</style>
