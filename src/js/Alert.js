class Alert {
    constructor() {
        this.value = parseInt(localStorage.value) || 0;
        this.alertOpenButton = document.querySelector('.module__button');
        this.alertCloseButton = document.querySelector('.alert__close');
        this.alert = document.querySelector('.alert-overlay');
        this.alertValueNode = document.querySelector('.alert__value');
        this.resetButton = document.querySelector('.alert__button');
    }

    updateValue = () => {
        this.alertValueNode.textContent = this.value;
        this.saveValueInLocalStorage();
    }

    saveValueInLocalStorage = () => {
        localStorage.value = this.value;
    }

    checkDisplayResetButton = () => {
        if(this.value >= 5) {
            this.resetButton.classList.remove('alert__button--hide')
        }

        else {
            if(!this.resetButton.classList.contains('alert__button--hide')) {
                this.resetButton.classList.add('alert__button--hide');
            }
        }
    }

    resetValue = () => {
        this.value = 0;
    }

    increaseValue = () => {
        this.value += 1;
        this.updateValue();
    }

    openAlertButtonListener = () => {
        this.alertOpenButton.addEventListener('click', () => {
            this.alert.classList.remove('alert-overlay--hide');
            this.increaseValue();
            this.checkDisplayResetButton();
        })
    }

    closeAlertButtonListener = () => {
        this.alertCloseButton.addEventListener('click', ()=> {
            this.alert.classList.add('alert-overlay--hide');
        })
    }

    closeAlertClickOutside = () => {
        this.alert.addEventListener('click', event => {
            if(event.target.classList.contains('alert-overlay')) {
                this.alert.classList.add('alert-overlay--hide');
            }
        })
    }

    resetAlertButtonListener = () => {
        this.resetButton.addEventListener('click', event => {
            this.resetValue();
            this.updateValue();
            this.checkDisplayResetButton();
        })
    }

    initialize = () => {
        this.openAlertButtonListener();
        this.closeAlertButtonListener();
        this.resetAlertButtonListener();
        this.closeAlertClickOutside();
    }
};