<template>
    <div >
	    <form>
			<input type="text" v-model="newArticle">
			<button @click.prevent="addNewArticle">Click</button>
		</form>
    </div>
</template>

<script>

    
    export default {
        data (){
        	return{
        		newArticle: '',


        	};

        },

        methods:{
        	addNewArticle(){
        		this.$emit('addNewAricleToArry', this.newArticle);
        		console.log(this.newArticle);
        	}
        },
    
    }
</script>

<style>
</style>
