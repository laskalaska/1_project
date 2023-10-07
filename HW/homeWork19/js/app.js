// import axios from "axios";

document.getElementById('showPlanets').addEventListener('click', () => {
    document.getElementById('showPlanets').setAttribute('disabled', '')
    sendItemRequest(planets_url, 'planets');
})
document.getElementById('showPeople').addEventListener('click', () => {
    document.getElementById('showPeople').setAttribute('disabled', '')
    sendItemRequest(people_url, 'people');

})

document.getElementById('showVehicles').addEventListener('click', () => {
    document.getElementById('showVehicles').setAttribute('disabled', '')
    sendItemRequest(vehicles_url, 'vehicles');

})

function sendItemRequest(url, keyword) {
    axios.get(url)
        .then((res) => {
            // console.log(res);
            return res;
        }).then((res) => {
        const response = res.data;
        const newData = response.results;
        showItemList(newData, keyword);

        resultArrays[keyword] = resultArrays[keyword].concat(newData);

        // console.log(resultArrays[keyword]);

        url = response.next || '';
        const itemActionBtn = document.getElementById(itemActionBtnMapping[keyword]);

        if (response.next) {
            const loadMoreItems = () => {
                sendItemRequest(url, keyword);
            }

            createElement('button', itemActionBtn, 'Load more', {
                'id': 'nextListBtn',
                'className': 'btn btn-link'
            }, {click: loadMoreItems});
        } else {
            removeElement(itemActionBtn);
        }
    })
}


function openModal(event) {
    cleanElement('#modalDataList');
    const itemCategory = event.target.getAttribute('data-category');
    const itemName = event.target.getAttribute('data-id');
    // console.log(itemName)
    const dataObj = resultArrays[itemCategory].find(item => item.name === itemName);
    // console.log(dataObj)
    for (let key of dataObjProp[itemCategory]) {
        const newKey = key.replaceAll('_', ' ');
        createElement('li', '#modalDataList', `${newKey}: ${dataObj[key]}`);
    }
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = dataObj.name
}


function showItemList(data, keyword) {
    const itemList = document.querySelector(itemListMapping[keyword]);
    // console.log(data);
    for (const ItemDataObj in data) {
        const item = data[ItemDataObj];
        const itemName = item.name;
        // console.log(itemName);
        createElement('button', itemList, itemName, {
            'className': 'list-group-item list-group-item-action',
            'data-id': itemName,
            'data-category': keyword,
            'data-bs-toggle': "modal",
            'data-bs-target': "#exampleModal"
        }, {
            click: openModal
        });
    }
    const itemActionBtn = document.getElementById(itemActionBtnMapping[keyword]);
    itemActionBtn ? removeElement(itemActionBtn) : itemActionBtn;
    createElement('div', itemList, '', {'id': `${itemActionBtnMapping[keyword]}`});
}