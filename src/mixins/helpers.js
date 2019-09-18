export default {
    methods: {
        onBlurMixin(id, checked) {
            let element = document.getElementById(id);
            if (element && !element.value && !checked) {
                element.style.borderColor = "red";
            } else {
                if(element){
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
    }
}