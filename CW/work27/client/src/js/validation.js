export function validateData() {
    let isValid = true;

    for (let key in regExps) {
        const regItem = regExps[key];
        if (!regItem.regex.test(regItem.elementValue.value)) {
            regItem.error.errorContainer.innerText = regItem.error.message;
            isValid = false;
        } else {
            regItem.error.errorContainer.innerText = '';
        }
    }

    return isValid;
}

const regExps = {
    personName: {
        regex: /^[A-Za-z\s]+$/,
        elementValue: document.forms.checkout.elements.fullName,
        error: {
            message: 'Enter correct name.',
            errorContainer: document.getElementById('nameError')
        }
    },
    personAge: {
        regex: /^\S/,
        elementValue: document.forms.checkout.elements.city,
        error: {
            message: 'City field is required',
            errorContainer: document.getElementById('cityError')
        }
    },
    carName: {
        regex: /^\d{5}$/,
        elementValue: document.forms.checkout.elements.postalOffice,
        error: {
            message: 'Enter valid postal code (5 digits). This field is required.',
            errorContainer: document.getElementById('postalError')
        }
    }
}