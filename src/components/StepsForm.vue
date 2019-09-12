<template>
    <div id="app">
        <form @submit.prevent="submit()" class="mainForm">
            <h1>Step {{currentStep}} / {{totalSteps}}</h1>

            <div class='step' v-if="currentStep === 1">
                <step1 v-bind:countries="countries" v-bind:form1Data="form1Data && form1Data"
                       @clicked="onClickChild"></step1>
            </div>
            <div class='step' v-if="currentStep === 2">
                <step2 v-bind:countries="countries" v-bind:form2Data="form2Data" @clicked="onClickSecondChild"></step2>
            </div>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';
    import step1 from './Step1';
    import step2 from './Step2';

    export default {
        name: "StepsForm",
        components: {
            step1,
            step2,
        },
        data() {
            return {
                currentStep: 1,
                totalSteps: 3,
                countries: null,
                form1Data: null,
                form2Data: null,
            }
        },
        created() {
            this.fetchData();
        },

        methods: {
            prev() {
                this.currentStep--;
            },
            next() {
                this.currentStep++;
            },
            submit() {
                if (this.form1Data) {
                    console.log('succsess:form 1 data', this.form1Data);
                } else {
                    console.log('error');
                }
            },

            onClickChild(value) {
                this.form1Data = value;
                this.currentStep = value.step;
                // this.submit();
            },
            onClickSecondChild(value) {
                if (value) {
                    console.log('onClickSecondChild',value);
                    this.form2Data = value;
                    this.currentStep = value.step;
                    // this.submit();
                }else{
                    this.currentStep = 1;
                }
            },

            fetchData() {
                let self = this;
                axios.get('https://gist.githubusercontent.com/jamesbar2/1c677c22df8f21e869cca7e439fc3f5b/raw/21662445653ac861f8ab81caa8cfaee3185aed15/postal-codes.json')
                    .then(function (res) {
                        self.countries = res.data.slice(0, 25);
                    }, function (err) {
                        console.log('error', err);
                    });
            },
        }
    }
</script>

<style scoped>
    .mainForm {
        max-width: 500px;
        background: #FAFAFA;
        margin: 50px auto;
        box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
        border-radius: 10px;
        border: 6px solid #305A72;
    }
</style>