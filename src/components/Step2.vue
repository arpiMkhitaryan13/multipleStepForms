<template>
    <form @submit.prevent="submit()">
        <input id="emailInput" v-on:blur="blurField('emailInput')" v-on:focus="focusField('emailInput')"
               v-bind:class="{'invalid': !email && attemptSubmit}" type="email" placeholder="Email..." v-model="email">
        <input id="passwordInput" v-on:blur="blurField('passwordInput')" v-on:focus="focusField('passwordInput')"
               v-bind:class="{'invalid': !password && attemptSubmit}" type="password" placeholder="Password..."
               v-model="password">
        <button type="button" v-on:click="prev()">Previous</button>
        <button type="submit">Next</button>
    </form>
</template>

<script>
    export default {
        props: ['form2Data'],
        name: "Step2",
        data() {
            const {form2Data} = this;
            return {
                attemptSubmit: false,
                step: 2,
                email: form2Data && form2Data.email || null,
                password: form2Data && form2Data.password || null,
            }
        },
        methods: {
            submit(prev) {
                this.attemptSubmit = true;
                const {email, password, step} = this;
                const propsToPass = {
                    email,
                    password,
                    step,
                };
                if (prev && this.email && this.password) {
                    this.$emit('clicked', propsToPass);
                } else {
                    this.$emit('clicked', propsToPass);
                    console.log('error in step 2');
                }
            },
            blurField(id) {
                if (!document.getElementById(`${id}`).value) {
                    document.getElementById(`${id}`).style.borderColor = "red";
                } else {
                    this.focusField(id)
                }
            },
            focusField(id) {
                document.getElementById(`${id}`).style.borderColor = "#216288";
            },
            prev() {
                this.step = 1;
                this.submit(this.step);
            }
        },
    }
</script>

<style scoped>
    .invalid {
        border-color: red !important;
    }

</style>