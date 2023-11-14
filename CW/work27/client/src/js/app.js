import axios from "axios";
import {createElement} from "./domHelpers";
import {handleCategoryClick} from "./eventHandlers";
import {basicUrl} from "./common";

import '../scss/styles.scss';


document.addEventListener('DOMContentLoaded', async () => {
    const menuParent = document.getElementById('menu');

    const { data } = await axios(`${basicUrl}/api/categories`);
    console.log(data);

    data.forEach(item => {
        createElement('li', menuParent, item.name, {'data-id': item.id}, {click: handleCategoryClick})
    })

    // axios('http://localhost:3000/api/categories')
    //     .then((categories) => {
    //         console.log(categories.data)
    //     })
})