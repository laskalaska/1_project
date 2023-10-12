const regExps = {
    personName: {
        regex: /^[A-Za-z\s]+$/,
        elementValue: document.forms.infoForm.elements.pName,
        error: {
            message: 'Enter correct name.',
            errorContainer: document.getElementById('pNameError')
        }
    },
    personAge: {
        regex: /^(1[89])|([2-9]\d)$/,
        elementValue: document.forms.infoForm.elements.pAge,
        error: {
            message: 'Enter correct age. It must be over 18.',
            errorContainer: document.getElementById('pAgeError')
        }
    },
    carName: {
        regex: /^[A-Za-z\d-\/]+$/,
        elementValue: document.forms.infoForm.elements.cName,
        error: {
            message: 'Enter valid value. This field is required.',
            errorContainer: document.getElementById('cNameError')
        }
    },
    carBrand: {
        regex: /^[A-Za-z\d]+$/,
        elementValue: document.forms.infoForm.elements.cBrand,
        error: {
            message: 'Enter valid value for the brand of the car. This field is required.',
            errorContainer: document.getElementById('cBrandError')
        }
    },
    carMaxSpeed: {
        regex: /^\d{1,3}$/,
        elementValue: document.forms.infoForm.elements.cMaxSpeed,
        error: {
            message: 'Enter valid value for maximum speed of the car. This field is required.',
            errorContainer: document.getElementById('cMaxSpeedError')
        }
    },
    carEngineCapacity: {
        regex: /^\d{1,4}$/,
        elementValue: document.forms.infoForm.elements.cEngine,
        error: {
            message: 'Enter valid value for Engine Capacity. This field is required.',
            errorContainer: document.getElementById('cEngineError')
        }
    }
}