<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <StepsForm msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import StepsForm from './components/StepsForm.vue'

    export default {
        name: 'app',
        components: {
            StepsForm
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    @media screen and (max-width: 250px) {
        #app {
            display: none;
        }

    }

    button {
        background-color: #216288;
        border: 1px solid #17445E;
        display: inline-block;
        cursor: pointer;
        color: #FFFFFF;
        padding: 8px 18px;
        border-radius: 8px;
        outline: none;
        margin: 1em .5em;
    }

    input, select {
        display: block;
        min-height: 35px;
        border-radius: 8px;
        width: 60%;
        margin: .5em auto;
        outline: none;
        border: 1px solid #216288;
    }

    p {
        color: red;
    }
</style>
