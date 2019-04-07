<template>
	<div>
		<h3>Qutes Added</h3>
		<div class="progress">
			<div class="progress">
				<div class="progress-bar" role="progressbar" :style="{width: (qouteCount / maxQuotes * 100 + '%')}"  aria-valuenow="60" aria-valuemin="10" aria-valuemax="100">
					
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
	
		props: ['qouteCount', 'maxQuotes']
 
	}
</script>