<template>
    <div class="container">
        <app-head></app-head>
        <app-input @addNewAricleToArry="newAricle"></app-input>
        <app-articles :articles="article" ></app-articles>

    </div>
</template>

<script>

    import Head from './components/Head.vue';
    import Input from './components/Input.vue';
    import Articles from './components/Articles.vue';
    export default {

        data: function() {
            return {

                article:['jedan', 'dva'],

            }
        },

        methods:{
            newAricle(newArticle){
                this.article.push(newArticle);
            },
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
