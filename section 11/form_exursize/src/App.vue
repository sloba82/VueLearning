<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <form>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="name">Full name</label>
                        <input
                                type="text"
                                id="name"
                                class="form-control"
                                v-model="userData.name">
                    </div>
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input
                                type="text"
                                id="mail"
                                class="form-control"
                                v-model="userData.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                                <p>{{ userData.password }}</p>
                    </div>
                        <app-store-data v-model="storeData"></app-store-data>
                    <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button
                            class="btn btn-primary"
                            @click.prevent="">Submit!
                        </button>
                    </div>
                    </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name:{{ userData.name }} </p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Store in Database?: {{ storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from './StoreData.vue'
    export default {

        data() {
            return {
                userData: {
                    name:'',
                    mail:'',
                    password:'',
                },

                storeData: true,
            }
        },

        components: {
            appStoreData: Store,
        },
        
        created(){
            console.log(this);
        },
    }
</script>

<style>
</style>
