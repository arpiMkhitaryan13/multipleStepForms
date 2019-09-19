<template>
    <div>
        <div class="container preload">
            <div class="creditcard">
                <div class="front" v-bind:style="{'display': flipped? 'none' : 'contents'}" v-on:click="onFlipCard">
                    <div id="ccsingle"></div>
                    <svg version="1.1" id="cardfront" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px" viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;"
                         xml:space="preserve">
                    <g id="Front">
                        <g id="CardBackground">
                            <g id="Page-1_1_">
                                <g id="amex_1_">
                                    <path v-bind:style="{'fill': cardColor1 && cardNumber? cardColor1: 'grey'}"
                                          id="Rectangle-1_1_"
                                          class="lightcolor grey" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z"/>
                                </g>
                            </g>
                            <path v-bind:style="{'fill': cardColor2 && cardNumber? cardColor2: 'a0a0a2'}"
                                  class="darkcolor greydark"
                                  d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"/>
                        </g>
                        <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber" class="st2 st3 st4">{{cardNumber}}</text>
                        <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname" class="st2 st5 st6">{{cardHolderName}}</text>
                        <text transform="matrix(1 0 0 1 54.1074 389.8793)" class="st7 st5 st8">cardholder name</text>
                        <text transform="matrix(1 0 0 1 479.7754 388.8793)" class="st7 st5 st8">expiration</text>
                        <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">card number</text>
                        <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire"
                              class="st2 st5 st9">{{expirationDate || '11/03'}}</text>
                        <text transform="matrix(1 0 0 1 479.3848 417.0097)" class="st2 st10 st11">VALID</text>
                        <text transform="matrix(1 0 0 1 479.3848 435.6762)" class="st2 st10 st11">THRU</text>
                        <polygon class="st2" points="554.5,421 540.4,414.2 540.4,427.9 		"/>
                        </g>
                        <g id="cchip">
                            <g>
                                <path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"/>
                            </g>
                            <g>
                                <g>
                                    <rect x="82" y="70" class="st12" width="1.5" height="60"/>
                                </g>
                                <g>
                                    <rect x="167.4" y="70" class="st12" width="1.5" height="60"/>
                                </g>
                                <g>
                                    <path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"/>
                                </g>
                                <g>
                                    <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5"/>
                                </g>
                                <g>
                                    <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5"/>
                                </g>
                                <g>
                                    <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5"/>
                                </g>
                                <g>
                                    <rect x="142" y="117.9" class="st12" width="26.2" height="1.5"/>
                                </g>
                            </g>
                    </g>
                        <g id="Back">
                    </g>
                </svg>
                </div>
                <div class="back" v-bind:class="{'flipped': flipped}" v-on:click="onFlipCard">
                    <svg version="1.1" id="cardback" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px" viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;"
                         xml:space="preserve">
                    <g id="Front">
                        <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11"/>
                    </g>
                        <g id="Back">
                        <g id="Page-1_2_">
                            <g id="amex_2_">
                                <path v-bind:style="{'fill': cardColor1 && cardNumber? cardColor1: 'grey'}"
                                      id="Rectangle-1_2_" class="darkcolor greydark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"/>
                            </g>
                        </g>
                            <rect y="61.6" class="st2" width="750" height="78"/>
                            <g>
                            <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z"/>
                                <rect x="42.9" y="198.6" class="st4" width="664.1" height="10.5"/>
                                <rect x="42.9" y="224.5" class="st4" width="664.1" height="10.5"/>
                                <path class="st5"
                                      d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"/>
                        </g>
                            <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity"
                                  class="st6 st7">{{securityCode}}</text>
                            <g class="st8">
                            <text transform="matrix(1 0 0 1 518.083 280.0879)" class="st9 st6 st10">security code</text>
                        </g>
                            <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5"/>
                            <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5"/>
                            <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback"
                                  class="st12 st13"></text>
                    </g>
                </svg>

                </div>
            </div>
        </div>
        <form @submit.prevent="onSubmit()">
            <input id="ccNumberInput" @blur="onBlurMixin('ccNumberInput')" @focus="onFocusMixin('ccNumberInput')"
                   v-mask="mask" placeholder="Card number..." v-model="cardNumber" type="text"
                   v-on:input="checkValidation('ccNumberInput')"
                   :maxlength="ccValidLength || 20"
                   v-bind:class="{'invalid':(!cardNumber && attemptSubmit) || (cardNumber && !ccValidLength) }">
            <p v-if="(!cardNumber && attemptSubmit) || (cardNumber && !ccValidLength)">*Enter valid card number</p>
            <!--            <img class="ccIcon" v-if="activeCreditCardName && cardNumber && !flipped" :src="dambul"-->
            <!--                 alt="">{{activeCreditCardName}}-->
            <!--   **********************************************************************         -->
            <img
                    class="ccIcon"
                    v-if="dambul && cardNumber && !flipped"
                    v-bind:src="require(`@/assets/ccIcons/${dambul}.svg`)">
            <input id="ccNameInput" @blur="onBlurMixin('ccNameInput')" @focus="onFocusMixin('ccNameInput')"
                   placeholder="Cardholder name..." v-model="cardHolderName" @input="disableNumberInput('ccNameInput')"
                   @paste.prevent maxlength="21"
                   :class="{'invalid' : !cardHolderName && attemptSubmit}">
            <input id="ccSecurityCode" @blur="onBlurMixin('ccSecurityCode')" @focus="onFocusMixin('ccSecurityCode')"
                   placeholder="Security code..." v-model="securityCode" @click="onFlipCard('back')"
                   @input="disableLetterInput('ccSecurityCode')" maxlength="4"
                   :class="{'invalid' : !securityCode && attemptSubmit}">
            <input id="ccDate" @blur="onBlurMixin('ccDate')" @focus="onFocusMixin('ccDate')" v-mask="'##/##'"
                   type="text" placeholder="Expiration date..." v-model="expirationDate"
                   @input="dateValidation('ccDate')"
                   :class="{'invalid' : !expirationDate && attemptSubmit}">
            <p v-if="(!expirationDate && attemptSubmit) || expirationDate && expirationDate.length !== 5">*Enter valid
                date until 2024</p>
            <button type="button" v-on:click="prev()">Previous</button>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueMask from 'v-mask';
    import helpers from "../mixins/helpers";

    Vue.use(VueMask);


    export default {
        name: "Step3",
        props: ['_cardHolderName', 'form3Data'],
        mixins: [helpers],
        data() {
            const {form3Data} = this;
            return {
                step: 3,
                attemptSubmit: false,
                flipped: false,
                cardNumber: form3Data && form3Data.cardNumber || null,
                cardHolderName: form3Data && form3Data.cardHolderName || '',
                securityCode: form3Data && form3Data.securityCode || null,
                expirationDate: form3Data && form3Data.expirationDate || null,
                activeCreditCardName: null,
                dambul: null,
                mask: '#### #### #### ####',
                cardColor1: null,
                cardColor2: null,
                ccValidLength: null,
                creditcards: {
                    list: [
                        {
                            brand: 'AmEx',
                            image: '@/assets/ccIcons/AmEx.svg',
                            verification: '^3[47][0-9]',
                            mask: '#### ###### #####',
                            color1: '#ffeb3b',
                            color2: '#f9a825',
                            length: 15,
                        },
                        {
                            brand: 'MasterCard',
                            image: "/img/MasterCard.cedb0a3c.svg",
                            verification: '^5[1-5][0-9]',
                            mask: '#### #### #### ####',
                            color1: '#03A9F4',
                            color2: '#0288D1',
                            length: 16,
                        },
                        {
                            brand: 'Visa',
                            image: '/img/Visa.6db9a801.svg',
                            verification: '^4[0-9]',
                            mask: '#### #### #### ####',
                            color1: '#66bb6a',
                            color2: '#388e3c',
                            length: 16,

                        },
                        {
                            brand: 'HyperCard',
                            image: '/img/HiperCard.b987fe1f.svg',
                            verification: '^3(?:0[0-5]|[68][0-9])[0-9]',
                            mask: '#### #### #### ####',
                            color1: '#ef5350',
                            color2: '#d32f2f',
                            length: 14,
                        },

                    ],
                    active: null
                },
            }
        },

        methods: {
            onSubmit(prev) {
                this.attemptSubmit = true;
                const {ccValidLength, expirationDate, cardHolderName, securityCode, cardNumber} = this;
                if (ccValidLength && expirationDate.length === 5 && cardHolderName && securityCode) {
                    const propsToPass = {
                        cardNumber,
                        cardHolderName,
                        securityCode,
                        expirationDate,
                        step: prev ? prev : 4,
                    };
                    this.$emit('onSubmitStep3', propsToPass);
                } else {
                    console.log('error in step 3');
                }
            },
            checkValidation(id) {
                for (let i = 0; i < this.creditcards.list.length; i++) {
                    if (this.cardNumber.match(new RegExp(this.creditcards.list[i].verification))) {
                        this.creditcards.active = i + 1;
                        this.activeCreditCardName = this.creditcards.list[i].image;
                        this.dambul = this.creditcards.list[i].brand;
                        this.mask = this.creditcards.list[i].mask;
                        this.cardColor1 = this.creditcards.list[i].color1;
                        this.cardColor2 = this.creditcards.list[i].color2;
                        let cardNumberWithoutSpaces = this.cardNumber.replace(/\s/g, '').length;
                        if (cardNumberWithoutSpaces === this.creditcards.list[i].length) {
                            this.ccValidLength = cardNumberWithoutSpaces;
                        } else {
                            this.ccValidLength = null;
                        }
                    }
                }
                this.onBlurMixin(id);
                this.onFlipCard('front');
            },
            onFlipCard(type) {
                if (type === 'back') {
                    this.flipped = true;
                } else if (type === 'front') {
                    this.flipped = false;
                } else {
                    this.flipped = !this.flipped;
                }
            },
            disableNumberInput(id) {
                this.cardHolderName = this.cardHolderName.replace(/[^A-Za-z-]/g, '');
                this.onBlurMixin(id);
                this.onFlipCard('front');
            },
            disableLetterInput(id) {
                this.securityCode = this.securityCode.replace(/\D+/g, '');
                this.onBlurMixin(id);
                this.onFlipCard('back');
            },
            dateValidation(id) {
                let month = Number(this.expirationDate.split('/')[0]);
                let year = Number(this.expirationDate.split('/')[1]);
                if ((month && month > 12) || (year && year > 24) || (!month && this.expirationDate[1] === '0') || (!year && this.expirationDate[4] === '0')) {
                    this.expirationDate = null;
                }
                this.onFlipCard('front');
                this.onBlurMixin(id);
            },
            prev() {
                this.step = 2;
                this.onSubmit(this.step);
            },
        },
    }
</script>

<style scoped>
    .container {
        max-width: 400px;
        max-height: 251px;
        height: 54vw;
        padding: 50px;
    }

    /* FRONT OF CARD */
    #svgname {
        text-transform: uppercase;
    }

    #cardfront .st2 {
        fill: #FFFFFF;
    }

    #cardfront .st3 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 600;
    }

    #cardfront .st4 {
        font-size: 54.7817px;
    }

    #cardfront .st5 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
    }

    #cardfront .st6 {
        font-size: 33.1112px;
    }

    #cardfront .st7 {
        opacity: 0.6;
        fill: #FFFFFF;
    }

    #cardfront .st8 {
        font-size: 24px;
    }

    #cardfront .st9 {
        font-size: 36.5498px;
    }

    #cardfront .st10 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 300;
    }

    #cardfront .st11 {
        font-size: 16.1716px;
    }

    #cardfront .st12 {
        fill: #4C4C4C;
    }

    /* BACK OF CARD */
    #cardback .st0 {
        fill: none;
        stroke: #0F0F0F;
        stroke-miterlimit: 10;
    }

    #cardback .st2 {
        fill: #111111;
    }

    #cardback .st3 {
        fill: #F2F2F2;
    }

    #cardback .st4 {
        fill: #D8D2DB;
    }

    #cardback .st5 {
        fill: #C4C4C4;
    }

    #cardback .st6 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
    }

    #cardback .st7 {
        font-size: 27px;
    }

    #cardback .st8 {
        opacity: 0.6;
    }

    #cardback .st9 {
        fill: #FFFFFF;
    }

    b
    #cardback .st11 {
        fill: #EAEAEA;
    }

    #cardback .st12 {
        font-family: 'Rock Salt', cursive;
    }

    #cardback .st13 {
        font-size: 37.769px;
    }

    .creditcard .front,
    .creditcard .back {
        position: absolute;
        width: 100%;
        max-width: 400px;
        backface-visibility: hidden;
        color: #47525d;
    }

    .creditcard .back {
        transform: rotateY(180deg);
    }

    .flipped {
        display: contents;
    }

    .cardNumberInput {
        display: flex;
    }

    .ccIcon {
        /*border: 1px solid red;*/
        /*width: 200px;*/
        /*height: 100px;*/
        position: absolute;
        top: 20%;
        right: 16%;
        height: 15%;
    }

    .invalid {
        border-color: red !important;
    }

    p {
        color: red;
    }
</style>