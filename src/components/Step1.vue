<template>
    <form @submit.prevent="submit()">
        <input v-on:input="blurField('nameInput')" v-bind:class="{'invalid': !name && attemptSubmit}" id="nameInput"
               v-on:blur="blurField('nameInput')" v-on:focus="focusField('nameInput')" placeholder="First name..."
               v-model="name"/>
        <p v-if="!name && attemptSubmit" class="error-message">*The name field is required</p>

        <input v-on:input="blurField('lastNameInput')" v-bind:class="{'invalid': !lastName && attemptSubmit}"
               id="lastNameInput" v-on:blur="blurField('lastNameInput')" v-on:focus="focusField('lastNameInput')"
               placeholder="Last name..." v-model="lastName"/>
        <p v-if="!lastName && attemptSubmit" class="error-message">*The last name field is required</p>

        <select v-model="country" v-bind:class="{'invalid':!country && attemptSubmit}">
            <option value="" disabled hidden>Choose your Country</option>
            <option v-for="country in countries" v-bind:value="country.Country">
                {{ country.Country }}
            </option>
        </select>
        <p v-if="!country && attemptSubmit" class="error-message">*The country field is required</p>

        <input maxlength="8" minlength="3" v-on:input="onlyLetter('cityNameInput')"
               v-bind:class="{'invalid':(!city && attemptSubmit)|| city && city.length <= 3}" id="cityNameInput"
               v-on:blur="blurField('cityNameInput')" v-on:focus="focusField('cityNameInput')" placeholder="City"
               v-model="city"/>
        <p v-if="!city && attemptSubmit" class="error-message">*The city field is required</p>
        <p v-if="city && city.length <= 3" class="error-message">*More than 3 characters</p>

        <input v-on:input="regex('addressInput')" v-bind:class="{'invalid':!address && attemptSubmit}"
               id="addressInput" v-on:blur="blurField('addressInput')" v-on:focus="focusField('addressInput')"
               placeholder="Address..." v-model="address"/>
        <p v-if="!address && attemptSubmit" class="error-message">*The address field is required</p>

        <input v-on:input="blurField('postalCodeInput')" v-bind:class="{'invalid':!isPostalCodeValid }"
               id="postalCodeInput" v-on:blur="blurField('postalCodeInput')"
               v-on:focus="focusField('postalCodeInput')" type="text" placeholder="Postal Code..."
               v-model="postalCode"/>
        <p v-if="!isPostalCodeValid && postalCode" class="error-message">*Please enter valid postal code</p>

        <input v-on:change="check" class="shippingCheckbox" type="checkbox" name="shipping" value=""> Use filled data
        for shipping<br>

        <select :disabled="checked" v-model="checked?country:shippingCountry"
                v-bind:class="{'invalid':!shippingCountry && attemptSubmit && !checked, 'unused':checked}">
            <option value="" disabled hidden>Choose your Country</option>
            <option v-for="country in countries" v-bind:value="country.Country">
                {{ country.Country }}
            </option>
        </select>
        <p v-if="!shippingCountry && attemptSubmit && !checked" class="error-message">*The country field is
            required</p>

        <input v-on:input="blurField('shippingCityNameInput')"
               v-bind:class="{'invalid':!shippingCity && attemptSubmit && !checked, 'unused':checked}"
               :disabled="checked" id="shippingCityNameInput" v-on:blur="blurField('shippingCityNameInput')"
               v-on:focus="focusField('shippingCityNameInput')" placeholder="City"
               v-model="checked?city:shippingCity"/>
        <p v-if="!shippingCity && attemptSubmit && !checked" class="error-message">*The city field is required</p>

        <input v-on:input="blurField('shippingAddressInput')"
               v-bind:class="{'invalid':!shippingAddress && attemptSubmit && !checked, 'unused':checked}"
               :disabled="checked" id="shippingAddressInput" v-on:blur="blurField('shippingAddressInput')"
               v-on:focus="focusField('shippingAddressInput')" placeholder="Address..."
               v-model="checked?address:shippingAddress"/>
        <p v-if="!shippingAddress && attemptSubmit && !checked" class="error-message">*The address field is
            required</p>

        <input v-on:input="blurField('shippingPostalCode')"
               v-bind:class="{'invalid':!isShippingPostalCodeValid && !checked, 'unused':checked}"
               :disabled="checked" id="shippingPostalCode" v-on:blur="blurField('shippingPostalCode')"
               v-on:focus="focusField('shippingPostalCode')" type="text" placeholder="Postal Code..."
               v-model="checked?postalCode:shippingPostalCode"/>
        <p v-if="!isShippingPostalCodeValid && shippingPostalCode && !checked" class="error-message">*Please enter
            valid postal code</p>

        <button type="submit" class="nextButton">Next</button>
    </form>
</template>

<script>
    export default {
        props: ['countries', 'form1Data'],
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
                    this.$emit('clicked', propsToPass);
                } else {
                    console.log('error in step 1');
                }
            },
            blurField(id) {
                if (!document.getElementById(id).value && !this.checked) {
                    document.getElementById(id).style.borderColor = "red";
                } else {
                    this.focusField(id)
                }
            },
            focusField(id) {
                document.getElementById(`${id}`).style.borderColor = "#216288";
            },
            onlyLetter(id) {
                this.city = this.city.replace(/[0-9]/g, '');
                this.blurField(id);
            },
            regex(id) {
                if (Number(this.address[0])) {
                    this.address = this.address[0] + this.address.substr(1).replace(/[0-9]/g, '');
                } else {
                    this.address = this.address.replace(/./g, '')
                }
                this.blurField(id);
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
                const {name, lastName, city, address, country, shippingCity, shippingAddress, shippingPostalCode, isPostalCodeValid, isShippingPostalCodeValid} = this;
                if (this.checked) {
                    return name && lastName && address && !!city && country && isPostalCodeValid;
                } else {
                    return name && lastName && shippingCity && shippingAddress && shippingPostalCode && address && !!city && isShippingPostalCodeValid;
                }
            }
        }
    }
</script>

<style scoped>
    p {
        color: red;
    }

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