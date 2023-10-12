document.getElementById('submitInfo').addEventListener('click', () => {
    const inputForm = document.forms.infoForm.elements;

    const pName = inputForm.pName.value;
    const pAge = inputForm.pAge.value;
    const cName = inputForm.cName.value;
    const cBrand = inputForm.cBrand.value;
    const cMaxSpeed = inputForm.cMaxSpeed.value;
    const cEngine = inputForm.cEngine.value;

    if (validateData()) {
        const userInfo = document.querySelector('.infoContainer');
        userInfo.classList.remove('hidden');

        const infoForm = document.querySelector('[name=infoForm]');
        infoForm.classList.add('hidden');

        const user = new Person(pName, pAge);
        user.showInfo();

        const userCar = new Car(cName, cBrand, cMaxSpeed, cEngine);
        userCar.setOwner(user);
        userCar.showInfo();
        console.log(userCar);
    }
})

function validateData() {
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
