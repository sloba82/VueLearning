<template>
    <div class="container">
    	
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <app-heder></app-heder>
                <router-view name="header-top"></router-view>
                <transition>
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>

	import Heder from './components/Heder.vue';
    export default {

    	  components: {
    		appHeder: Heder,
    	},
    }
</script>

<style>
</style>
