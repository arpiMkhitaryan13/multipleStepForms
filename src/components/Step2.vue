<template>
    <form @submit.prevent="submit()">
        <input id="emailInput"
               v-bind:class="{'invalid':  (!isEmailValid && email) || (!isEmailValid && attemptSubmit)}"
               v-model="email"
               @blur="onBlurMixin('emailInput')"
               @focus="onFocusMixin('emailInput')"
               @input="onBlurMixin('emailInput')"
               placeholder="Email...">
        <p v-if="( !isEmailValid && email) || (!isEmailValid && attemptSubmit)">*Email is not valid</p>
        <input id="passwordInput"
               v-bind:class="{'invalid': !password && attemptSubmit}"
               v-model="password"
               @blur="onBlurMixin('passwordInput')"
               @focus="onFocusMixin('passwordInput')"
               @input="onBlurMixin('passwordInput')"
               type="password" placeholder="Password...">
        <input id="confirmPasswordInput"
               v-bind:class="{'invalid': (!confirmPassword && attemptSubmit) || (confirmPassword && confirmPassword !== password)}"
               v-model="confirmPassword"
               @blur="onBlurMixin('confirmPasswordInput')"
               @focus="onFocusMixin('confirmPasswordInput')"
               @input="onBlurMixin('confirmPasswordInput')"
               type="password" placeholder="Password...">
        <p v-if="(!confirmPassword && attemptSubmit) || (confirmPassword && confirmPassword !== password)">*Password don't match!</p>
        <div class="buttonWrapper">
            <button type="button" @click="prev()">Previous</button>
            <button type="submit">Next</button>
        </div>

    </form>
</template>

<script>


    import helpers from "../mixins/helpers";

    export default {
        props: ['form2Data'],
        name: "Step2",
        mixins: [helpers],
        data() {
            const {form2Data} = this;
            return {
                attemptSubmit: false,
                step: 2,
                email: form2Data && form2Data.email || null,
                password: form2Data && form2Data.password || null,
                confirmPassword: form2Data && form2Data.confirmPassword || null,
                validEmail: false,
            }
        },
        methods: {
            submit() {
                this.attemptSubmit = true;
                const {email, password, confirmPassword, step} = this;
                const propsToPass = {
                    email,
                    password,
                    confirmPassword,
                    step,
                };
                if ((this.email && this.password && (this.password === this.confirmPassword)) || step === 1) {
                    this.$emit('onSubmitStep2', propsToPass);
                } else {
                    console.log('error in step 2');
                }
            },
            prev() {
                this.step = 1;
                this.submit();
            },

        },
            computed: {
                isEmailValid() {
                    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    if(this.email && this.email.match(reg)){
                        return true
                    }else{
                        return false
                    }
                }
            }
    }
</script>

<style scoped>
    .invalid {
        border-color: red !important;
    }
</style>