//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
let km = parseInt(prompt('Enter kms'))*1000;
let ft = parseInt(prompt('Enter fts'))*0.305;

if (km > ft){
    alert(`${km}m from km > ${ft}m from ft`);
}else if (ft > km){
    alert(`${km}m from km < ${ft}m from ft`);
} else if (km === ft){
    alert(`${km}m from km = ${ft}m from ft`);
}
