<template>
    <div>
 		<app-single-artical v-for="artical in articles">{{ artical }}</app-single-artical>
    </div>
</template>

<script>

    import SingleArtical from './SingleArical.vue'
    export default {
        props:['articles'],

        components: {
        	appSingleArtical: SingleArtical,
        },
    
    }
</script>

<style>
</style>
