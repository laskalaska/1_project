class House {
    /**
     *
     *@param {string} address
     *@param {number} floors
     *@param {Apartment[]} apartments
     */
    constructor (address, floors, apartments) {
        this.address = address;
        this.floors = floors;
        this.apartments = apartments;
    }
        showInfo()
        {
            const infoContainer = document.getElementById('infoContainer');
            createElement('h1', infoContainer, 'House Info');
            createElement('p', infoContainer, `Address: ${this.address}`);
            createElement('p', infoContainer, `Floors: ${this.floors}`);
            createElement('p', infoContainer, `Apartments:`);

            this.apartments.forEach(app => {
                const apObj = new Apartment(app.apartmentNumber, app.roomsAmount, app.people)
                apObj.showInfo()
            });
        }
}