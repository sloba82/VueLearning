<template>
    <div class="container">
        <app-header :qouteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    	<app-quote-grid :quotes="quotes" @deletedQuoteIndex="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to Delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Progress from './components/Header.vue';
    export default {
    	data: function () {
    		return {
    			quotes: [
    				'qoute 111'
    			],
    			maxQuotes: 10,
    		}
    	},

        methods: {
            newQuote(quote){
                this.quotes.push(quote);
            },

            deleteQuote(index){
                this.quotes.splice(index, 1);
            },

        },

    	components: {
    		appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Progress,
    	}

        
    }
</script>

<style>
</style>
