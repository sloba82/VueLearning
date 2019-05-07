<template>
    <div class="container"> 
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits"> {{ fruit }} </li>
        </ul>
    </div>
</template>

<script>

    import { fruitMixin } from './fruitMixins'
    export default {

        mixins: [fruitMixin],

 
        created(){
            console.log(' inside of list');
        }
    }
</script>

<style>

</style>
