let house = {};
const apartments = [];

document.getElementById('submitHouse').addEventListener('click', () => {
    const inputForm = document.forms.houseForm.elements;

    const address = inputForm.address.value;
    const floorsAmount = inputForm.floors.value;
    const apartmentsAmount = inputForm.apartments.value;

    house = {
        address,
        floorsAmount,
        apartmentsAmount
    }

    removeElement('[name=houseForm]');
    createApartmentForm(apartmentsAmount);


});

function createApartmentForm(apartmentsAmount) {
    let apartmentForm = createElement('form', 'section', '', {'name': 'apartmentForm', 'className': 'apartmentForm'});

    for (let i = 1; i <= apartmentsAmount; i++) {
        const apartmentContainer = createElement('div', apartmentForm, 'Apartment', {'className': 'ap-div def-div'});
        createElement('br', apartmentContainer, '');
        const apartmentNumberInput = createElement('input', apartmentContainer, '', {
            'type': 'text',
            'id': `apartmentNumber${i}`,
            'data-id': `${i}`,
            'placeholder': 'Apartment Number'
        });
        createElement('br', apartmentContainer, '');
        const apartmentRoomsAmountInput = createElement('input', apartmentContainer, '', {
            'type': 'text',
            'id': `roomsAmount${i}`,
            'data-id': `${i}`,
            'placeholder': 'Rooms Amount'
        });
        createElement('br', apartmentContainer, '');
        const apartmentPeopleAmountInput = createElement('input', apartmentContainer, '', {
            'type': 'text',
            'id': `peopleAmount${i}`,
            'data-id': `${i}`,
            'placeholder': 'Number of Residents'
        });
    }

    const submitApartmentButton = createElement('input', apartmentForm, '', {
        'type': 'button',
        'id': 'submitApartment',
        'value': 'Submit Apartment Parameters'
    });

    submitApartmentButton.addEventListener('click', function () {
        for (let i = 1; i <= apartmentsAmount; i++) {
            const apartmentNumber = document.getElementById(`apartmentNumber${i}`).value;
            const roomsAmount = document.getElementById(`roomsAmount${i}`).value;
            const peopleAmount = document.getElementById(`peopleAmount${i}`).value;

            const apartment = {
                apartmentNumber,
                roomsAmount,
                peopleAmount,
                people: []
            };
            apartments.push(apartment);
        }
        removeElement(apartmentForm);

        // Выводим результат в консоль
        console.log(apartments);
        createResidentInputs();
    });
}


function createResidentInputs() {
    const peopleAmountValues = apartments.map(apartment => apartment.peopleAmount);
    let residentsForm = createElement('form', 'section', '', {'name': 'residentsForm', 'className': 'residentsForm'});

    for (let index = 0; index < peopleAmountValues.length; index++) {
        const count = peopleAmountValues[index];
        const residentsContainer = createElement('div', residentsForm, 'Residents', {
            'className': 're-div def-div',
            'data-id': 'res-inputs'
        });
        const apNumber = createElement('p', residentsContainer, `Apartment №${apartments[index].apartmentNumber}`);

        for (let i = 0; i < count; i++) {
            const residentNameInput = createElement('input', residentsContainer, '', {
                'type': 'text',
                'id': `apartmentNumber${index}`,
                'data-id': `${index}`,
                'placeholder': 'Full Name of resident'
            });
            createElement('br', residentsContainer, '');
        }
        const submitButton = createElement('input', residentsContainer, '', {
            'type': 'button',
            'id': 'submitResidents',
            'value': 'Submit Residents'
        });

        submitButton.addEventListener('click', (event) => {
            const inputs = residentsContainer.querySelectorAll('input[type=text]');
            const residents = Array.from(inputs).map(input => input.value);
            apartments[index].people = residents;
            removeElement(event.target.parentElement);
            console.log(apartments);
            if (!(document.querySelector('[data-id=res-inputs]'))) {
                createElement('input', 'section', '', {
                    'type': 'button',
                    'id': 'showHouseInfo',
                    'value': 'Show House Info'
                }, {
                    'click': showHouseInfo
                });
            }
        });

    }

}

function showHouseInfo() {
    removeElement('#showHouseInfo');
    const myHouse = new House(house.address, house.floorsAmount, apartments);
    myHouse.showInfo();
    // const infoContainer = document.getElementById('infoContainer');
    // createElement('h1', infoContainer, 'House Info');
    // createElement('p', infoContainer, `Address: ${house.address}`);
    // createElement('p', infoContainer, `Floors: ${house.floorsAmount}`);
    // createElement('p', infoContainer, `Apartments:`);
    //
    // apartments.forEach(apartment => {
    //     const apartmentDiv = createElement('div', infoContainer, '', {'className': 'apartment def-div'});
    //     // Create HTML elements for each parameter
    //     for (const key in apartment) {
    //         const parameterDiv = createElement('div', apartmentDiv, `${key}: `);
    //         const parameterValue = createElement('span', parameterDiv, apartment[key]);
    //
    //         if (key === 'people') {
    //             // If the parameter is 'people', create 'Name' elements for each person
    //             parameterDiv.textContent = 'Residents:';
    //             parameterValue.textContent = '';
    //             parameterValue.classList.add('people-names');
    //             apartment[key].forEach(person => {
    //                 const personName = createElement('p', parameterDiv, 'Name: ');
    //                 personName.classList.add('person-name');
    //                 const span = createElement('span', personName, person);
    //                 // span.textContent = person;
    //             });
    //         }
    //     }
    // });
}
