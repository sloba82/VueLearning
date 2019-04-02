<template>
    <div>
    	<div class="row">
    		Single Quote: {{ singleQoute }}
    		
    	</div>
    </div>
</template>

<script>
	import {eventBus} from './../main';
    export default {

    	data: function() {
    		return {
    			singleQoute: ''
    		}

    	},

    	created() {
    		eventBus.$on('quoteHasAdded', (qoute)=>{
    			this.singleQoute = qoute;
    		});
    	}
        
    }
</script>


<style scoped>

div {
	border: 1px solid green;
}

</style>
