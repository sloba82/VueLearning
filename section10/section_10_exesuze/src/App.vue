<template>
    <div class="container">
    	<app-ProgresBar></app-ProgresBar>
    	<app-NewQuote></app-NewQuote>
    	<app-SingleQuote></app-SingleQuote>
    	<keep-alive>
    		<app-AlleQuote :myQutes="quotes"></app-AlleQuote>
    	</keep-alive>	
    </div>
</template>


<script>
	
	import ProgresBar from './components/ProgresBar.vue';
	import NewQuote from './components/NewQuote.vue';
	import SingleQuote from './components/SingleQuote.vue';
	import AlleQuote from './components/AlleQuote.vue';



    export default {

    	data: function (){

    		return {
    			quotes:[]
    		};
    	},

    	components: {
    		appProgresBar: ProgresBar,
    		appNewQuote: NewQuote,
    		appSingleQuote: SingleQuote,
    		appAlleQuote: AlleQuote,
    	},

    	 created() {
    		eventBus.$on('quoteHasAddedToArray', (qoute)=>{
    			this.quotes = qoute;
    		});
    	}
        
    }
</script>

<style>
</style>
