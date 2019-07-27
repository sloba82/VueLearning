<template>
	<div>
		<h3>Edit the User</h3>
		<p>Locale: {{$route.query.locale }}</p>
		<p>Analitics: {{$route.query.q }}</p>

	</div>
</template>


<script>
	export default {
		created(){
			console.log(this);
		},
	}

</script> 