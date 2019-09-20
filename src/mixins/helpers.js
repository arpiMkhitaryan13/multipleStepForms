export default {
    methods: {
        onBlurMixin(id, checked) {
            let element = document.getElementById(id);
            if (element) {
                if (!element.value && !checked) {
                    element.style.borderColor = "red";
                } else {
                    element.style.borderColor = "#216288";
                }
            }
        },
        onFocusMixin(id) {
            let element = document.getElementById(id);
            if(element){
                element.style.borderColor = "#216288";
            }
        },
        disableNumberInput(id) {
            this.cardHolderName = this.cardHolderName.replace(/[0-9]/g,  '');
            this.onBlurMixin(id);
            this.onFlipCard('front');
        },
    }
}