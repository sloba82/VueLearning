<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span style="color:red;"><slot name="subtitle"> the subtitle</slot></span>
        </div>
      <hr>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        quote: String
    }


}

</script>

<style scoped>
div {
 	border: 1px solid #ccc;
 	box-shadow: 1px 1px 5px black;
 	padding: 30px;
 	margine: 30px auto;
    text-align: center;
 }

 h2 {
    color: blue;
 }
</style>
