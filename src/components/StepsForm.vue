<template>
    <div id="app">
        <form @submit.prevent="submit()" class="mainForm">
            <h1>Step {{currentStep}} / {{totalSteps}}</h1>
            <div class='step' v-if="currentStep === 1">
                <step1 v-bind:countries="countries"
                       v-bind:form1Data="form1Data"
                       @onSubmitStep1="onSubmitStep1">
                </step1>
            </div>
            <div class='step' v-if="currentStep === 2">
                <step2 v-bind:form2Data="form2Data" @onSubmitStep2="onSubmitStep2"></step2>
            </div>
            <div class='step' v-if="currentStep === 3">
                <step3 v-bind:_cardHolderName="form1Data && form1Data.name"
                       v-bind:form3Data="form3Data"
                       @onSubmitStep3="onSubmitStep3">
                </step3>
            </div>
            <div class='step' v-if="currentStep === 4">
                <step4></step4>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import step1 from './Step1';
    import step2 from './Step2';
    import step3 from './Step3';
    import step4 from './Step4';

    export default {
        name: "StepsForm",
        components: {
            step1,
            step2,
            step3,
            step4,
        },
        data() {
            return {
                currentStep: 2,
                totalSteps: 4,
                countries: null,
                form1Data: null,
                form2Data: null,
                form3Data: null,
            }
        },
        created() {
            this.fetchData();
        },

        methods: {
            submit() {
                if (this.form3Data && this.form2Data && this.form1Data) {
                    console.log('succsess:', [this.form3Data, this.form2Data, this.form1Data ]);
                } else {
                    console.log('error');
                }
            },
            onSubmitStep1(value) {
                this.form1Data = value;
                this.currentStep = value.step;
            },
            onSubmitStep2(value) {
                if (value) {
                    this.form2Data = value;
                    this.currentStep = value.step;
                    if(value.step === 2){
                        this.currentStep = 3
                    } else{
                        this.currentStep = 1;
                    }
                }
            },
            onSubmitStep3(value) {
                if (value) {
                    this.form3Data = value;
                    this.currentStep = value.step;
                }
                if (this.currentStep === 4)
                {
                    this.submit();
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
        position: relative;
        margin: 50px auto;
        max-width: 500px;
        background: #FAFAFA;
        box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
        border-radius: 10px;
        border: 6px solid #305A72;
    }
</style>