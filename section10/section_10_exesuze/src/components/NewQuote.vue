<template>
    <div>
    	
	<div class="mb-3">
	    <label for="validationTextarea">Textarea</label>
	    <textarea v-model="inputQuote" class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
	    <div class="invalid-feedback" >
	        Please enter a Quote in the textarea. <br>
	      	<div v-if="inputQuote">
	      		You text: {{ inputQuote }}
	  		</div>

	    </div>
	    <button @click="addQuote">Add Quote</button>
	</div>

    </div>
</template>

<script>

	import { eventBus } from './../main';
    export default {

    	data: function () {
    		return {
    			inputQuote: '',
                qotesArray:[],
    		};
    	},

    	methods: {
    		addQuote() {

    			if (this.inputQuote){
                    eventBus.$emit('quoteHasAdded', this.inputQuote);

                    this.qotesArray.push(inputQuote);
                    eventBus.$emit('quoteHasAddedToArray', this.qotesArray);
    			}

    		},
    	}
        
    }
</script>
	
<style scoped>

</style>
