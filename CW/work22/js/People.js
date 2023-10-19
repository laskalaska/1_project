class People {
    constructor(fullName) {
        this.fullname = fullName;
    }

    showInfo() {
        const peopleDiv = document.querySelectorAll('div[data-id="res-div"]');

        const lastElement = peopleDiv[peopleDiv.length - 1];

        const personName = createElement('p', lastElement, 'Name: ');

        personName.classList.add('person-name');
        const span = createElement('span', personName, this.fullname);
    }
}