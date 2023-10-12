function Car(cName, cBrand, cMaxSpeed, cEngine) {
    this.name = cName;
    this.brand = cBrand;
    this.maxSpeed = cMaxSpeed;
    this.engine = cEngine;
    this.owner = null;

    this.showInfo = () => {
        const parentContainer = document.getElementById('carInfo');
        createElement('h3',parentContainer, 'Car Information');
        for (let property in this) {
            if (this.hasOwnProperty(property) && typeof this[property] !== 'function' && this[property] !== this.owner) {
                const itemName = createElement('p', parentContainer, `${property}: `);
                createElement('span', itemName, this[property]);
            }
        }
    }

    this.setOwner = (user) => {
        this.owner = user;
    }
}