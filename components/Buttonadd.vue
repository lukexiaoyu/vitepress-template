<script setup>
    import {ref} from 'vue'
    const num=ref(0)

</script>

<template>
    <div>
        <button @click="num++">+</button>
        <div class="box">{{num}}</div>
        <button @click="num--">-</button>
        
    </div>
</template>

<style scoped>
    button{
        background-color: gainsboro;
        box-shadow: 2px 2px black 1px 1px;
        border-radius: 5px;
        width: 50px;
        margin: 2px;
    }
    button:hover{
        background-color: black;
        color: white;
    }
    .box{
        display: inline-block;
        width: 30px;
        text-align: center;
    }
</style>