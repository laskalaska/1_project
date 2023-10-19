class Apartment {
    /**
     * @param {number} number
     * @param {number} roomsAmount
     * @param {People[]} people
     */
    constructor(number, roomsAmount, people) {
        this.number = number;
        this.roomsAmount = roomsAmount;
        this.people = people;
    }

    showInfo() {
        const infoContainer = document.getElementById('infoContainer');
        const apartmentDiv = createElement('div', infoContainer, '', {'className': 'apartment def-div'});
        for (const key in this) {
            if (key === 'people') {
                const peopleDiv = createElement('div', apartmentDiv, 'Residents: ', {'data-id': 'res-div'});
                this.people.forEach(name => {
                    const peopleObj = new People(name);
                    peopleObj.showInfo();
                });
            } else {
                const parameterDiv = createElement('div', apartmentDiv, `${key}: `);
                const parameterValue = createElement('span', parameterDiv, this[key]);
            }
        }
    }
}