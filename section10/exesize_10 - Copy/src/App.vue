<template>
    <div class="container">
        <app-head></app-head>
        <app-input></app-input>
        <app-articles></app-articles>

    </div>
</template>

<script>

    import Head from './components/Head.vue';
    import Input from './components/Input.vue';
    import Articles from './components/Articles.vue';
    export default {

        data: function() {
            return {

            }
        },

        components: {
            appHead: Head,
            appInput: Input,
            appArticles: Articles,
        },
    
    }
</script>

<style>
</style>
