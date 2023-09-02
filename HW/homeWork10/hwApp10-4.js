// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)
// const imgNumber = Math.floor(Math.random() * 3) + 1;
// console.log(imgNumber);

document.getElementById('randomImgBtn').addEventListener('click', (event) => {
    const imgNumber = Math.floor(Math.random() * 9) + 1;

    const image = document.createElement('img');
    image.src = `HW/homeWork10/images/${imgNumber}.jpg`;
    image.classList.add('randomImg');

    document.getElementById('imgContainer').replaceChildren();
    document.getElementById('imgContainer').appendChild(image);
});