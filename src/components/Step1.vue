<template>
    <form @submit.prevent="submit()">
        <input id="nameInput" v-bind:class="{'invalid': !name && attemptSubmit}" v-model="name"
               @blur="onBlurMixin('nameInput')" @focus="onFocusMixin('nameInput')"
               @input="onInput('nameInput')"
               placeholder="First name..."/>
        <p v-if="!name && attemptSubmit" class="error-message">*The name field is required</p>

        <input id="lastNameInput" v-bind:class="{'invalid': !lastName && attemptSubmit}" v-model="lastName"
               @input="onInput('lastNameInput')"
               @blur="onBlurMixin('lastNameInput')" @focus="onFocusMixin('lastNameInput')"
               placeholder="Last name..."/>
        <p v-if="!lastName && attemptSubmit" class="error-message">*The last name field is required</p>

        <select v-bind:class="{'invalid':!country && attemptSubmit}" v-model="country">
            <option value="" disabled hidden>Choose your Country</option>
            <option v-for="country in countries" v-bind:value="country.Country">
                {{ country.Country }}
            </option>
        </select>
        <p v-if="!country && attemptSubmit" class="error-message">*The country field is required</p>

        <input id="cityNameInput" v-bind:class="{'invalid':(!city && attemptSubmit)|| city && city.length <= 3}"
               v-model="city"
               @blur="onBlurMixin('cityNameInput')" @focus="onFocusMixin('cityNameInput')"
               @input="onlyLetter('cityNameInput')"
               maxlength="8" minlength="3"
               placeholder="City..."
        />
        <p v-if="!city && attemptSubmit" class="error-message">*The city field is required</p>
        <p v-if="city && city.length <= 3" class="error-message">*More than 3 characters</p>

        <input id="addressInput" v-bind:class="{'invalid':!address && attemptSubmit}"
               v-model="address"
               @blur="onBlurMixin('addressInput')" @focus="onFocusMixin('addressInput')"
               @input="addressValidation('addressInput')"
               placeholder="Address..."/>
        <p v-if="!address && attemptSubmit" class="error-message">*The address field is required</p>

        <input id="postalCodeInput" v-bind:class="{'invalid':!isPostalCodeValid }"
               v-model="postalCode"
               @blur="onBlurMixin('postalCodeInput')" @focus="onFocusMixin('postalCodeInput')"
               @input="onInput('postalCodeInput')"
               type="text" placeholder="Postal Code..."
        />
        <p v-if="!isPostalCodeValid && postalCode" class="error-message">*Please enter valid postal code</p>

        <input class="shippingCheckbox" v-on:change="check" type="checkbox" name="shipping" value=""> Use filled data
        for shipping<br>

        <select v-bind:class="{'invalid':!shippingCountry && attemptSubmit && !checked, 'unused':checked}"
                v-model="checked?country:shippingCountry"
                :disabled="checked">
            <option value="" disabled hidden>Choose your Country</option>
            <option v-for="country in countries" v-bind:value="country.Country">
                {{ country.Country }}
            </option>
        </select>
        <p v-if="!shippingCountry && attemptSubmit && !checked" class="error-message">*The country field is
            required</p>

        <input id="shippingCityNameInput"
               v-bind:class="{'invalid':!shippingCity && attemptSubmit && !checked, 'unused':checked}"
               v-model="checked?city:shippingCity"
               @blur="onBlurMixin('shippingCityNameInput')" @focus="onFocusMixin('shippingCityNameInput')"
               @input="onInput('shippingCityNameInput')"
               :disabled="checked"
               placeholder="City..."
        />
        <p v-if="!shippingCity && attemptSubmit && !checked" class="error-message">*The city field is required</p>

        <input id="shippingAddressInput"
               v-bind:class="{'invalid':!shippingAddress && attemptSubmit && !checked, 'unused':checked}"
               v-model="checked?address:shippingAddress"
               @blur="onBlurMixin('shippingAddressInput')" @focus="onFocusMixin('shippingAddressInput')"
               @input="onInput('shippingAddressInput')"
               :disabled="checked"
               placeholder="Address..."
        />
        <p v-if="!shippingAddress && attemptSubmit && !checked">*The address field is
            required</p>

        <input id="shippingPostalCode"
               v-bind:class="{'invalid':!isShippingPostalCodeValid && !checked, 'unused':checked}"
               v-model="checked?postalCode:shippingPostalCode"
               @blur="onBlurMixin('shippingPostalCode')" @focus="onFocusMixin('shippingPostalCode')"
               @input="onInput('shippingPostalCode')"
               :disabled="checked" type="text"
               placeholder="Postal Code..."
        />
        <p v-if="!isShippingPostalCodeValid && shippingPostalCode && !checked" class="error-message">*Please enter
            valid postal code</p>

        <button type="submit" class="nextButton">Next</button>
    </form>
</template>

<script>
    import helpers from "../mixins/helpers";

    export default {
        props: ['countries', 'form1Data'],
        mixins: [helpers],
        data() {
            const {form1Data} = this;
            return {
                attemptSubmit: false,
                checked: form1Data && form1Data.checked || false,
                name: form1Data && form1Data.name || null,
                lastName: form1Data && form1Data.lastName || null,
                postalCode: form1Data && form1Data.postalCode || '',
                address: form1Data && form1Data.address || '',
                city: form1Data && form1Data.city || null,
                country: form1Data && form1Data.country || '',
                shippingCity: form1Data && form1Data.shipping.shippingCity || null,
                shippingAddress: form1Data && form1Data.shipping.shippingAddress || null,
                shippingPostalCode: form1Data && form1Data.shipping.shippingPostalCode || null,
                shippingCountry: form1Data && form1Data.shipping.shippingCountry || '',
            }
        },

        methods: {
            check() {
                this.checked = !this.checked;
            },
            submit() {
                this.attemptSubmit = true;
                const {name, lastName, country, city, address, postalCode, checked, shippingCountry, shippingCity, shippingAddress, shippingPostalCode} = this;

                if (this.isFormValid) {
                    const propsToPass = {
                        step: 2,
                        name,
                        lastName,
                        country,
                        city,
                        address,
                        postalCode,
                        checked,
                        shipping: {
                            shippingCountry: checked ? country : shippingCountry,
                            shippingCity: checked ? city : shippingCity,
                            shippingAddress: checked ? address : shippingAddress,
                            shippingPostalCode: checked ? postalCode : shippingPostalCode,
                        }
                    };
                    this.$emit('onSubmitStep1', propsToPass);
                } else {
                    console.log('error in step 1');
                }
            },
            onInput(id) {
                this.onBlurMixin(id, this.checked);
            },
            onlyLetter(id) {
                this.city = this.city.replace(/[0-9]/g, '');
                this.onBlurMixin(id);
            },
            addressValidation(id) {
                if (Number(this.address[0])) {
                    this.address = this.address[0] + this.address.substr(1).replace(/[0-9]/g, '');
                } else {
                    this.address = this.address.replace(/./g, '')
                }
                this.onBlurMixin(id);
            },
            postalCodeValidation(postalCode) {
                const selectedCountry = this.countries.find(o => Object.keys(o).some(k => o[k].toLowerCase().includes(this.country.toLowerCase())));
                const regex = new RegExp(selectedCountry.Regex);
                return regex.test(postalCode);
            }
        },
        computed: {
            isPostalCodeValid() {
                if (this.country && this.postalCode) {
                    return this.postalCodeValidation(this.postalCode);
                } else if (this.attemptSubmit) {
                    return false;
                } else {
                    return true;
                }
            },

            isShippingPostalCodeValid() {
                if (!this.checked && this.shippingCountry && this.shippingPostalCode) {
                    return this.postalCodeValidation(this.shippingPostalCode)
                } else if (this.attemptSubmit) {
                    return false;
                } else {
                    return true;
                }
            },
            isFormValid() {
                const { name, lastName, city, address, country, isPostalCodeValid } = this;
                if (this.checked) {
                    return name && lastName && address && !!city && country && isPostalCodeValid;
                } else {
                    for(let key in this.$data)
                        if(!this.$data[key]) return false;
                    return true;
                }
            }
        }
    }
</script>

<style scoped>
    .shippingCheckbox {
        display: inline;
        min-height: unset;
        width: auto;
    }

    .invalid {
        border-color: red !important;
    }

    .unused {
        color: rgb(84, 84, 84);
        background-color: rgb(235, 235, 228);
        border-color: unset !important;
    }
</style>