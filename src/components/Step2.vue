<template>
    <form @submit.prevent="submit()">
        <input type="email" placeholder="Email...">
        <input type="password" placeholder="Password...">
        <input type="radio" name="package">Standard Package<br>
        <input type="radio" name="package">Premium Package<br>
        <button>Previous</button>
        <button type="submit">Next</button>
    </form>
</template>

<script>
    export default {
        name: "Step2",
        data(){
            return {
                email: null,
                password: null,
                package: null,
            }

        },
        methods:{
            submit(){
                console.log('submit')
            }
        }
    }
</script>

<style scoped>

</style>