<template>
	<div v-if="myQutes">
	    <div  v-for="item in myQutes">

	    Alle quone : {{ item }}
	    </div>
	</div>
</template>

<script>
/*	import { eventBus } from './../main';*/
    export default {

    	data: function() {
    		return {
    			myQutes: [ 'banana', 'jabuka'],
    		},
    	},
/*
    	created() {
    		eventBus.$on('quoteHasAddedToArray', (qoute)=>{
    			this.myQutes = qoute;
    		});
    	}
*/

        
    }
</script>

<style>
</style>
