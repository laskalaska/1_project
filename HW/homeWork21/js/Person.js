function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;

    this.showInfo = () => {
        const parentContainer = document.getElementById('personInfo');
        createElement('h3',parentContainer, 'Customer Information');
        for (let property in this) {
            if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
                const itemName = createElement('p', parentContainer, `${property}: `);
                createElement('span', itemName, this[property]);
            }
        }
    }
}