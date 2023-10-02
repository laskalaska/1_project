let imageCounter = 0;
let timeToSlide = 3000;
let interval;

const inter = () => {
    interval = setInterval(nextImg, timeToSlide);
}


function showImage(imageNumber) {
    document.getElementById('slideImage').src = `images/${imagesData[imageNumber]}`;
}

document.querySelector('.nextImg').addEventListener('click', () => {
    nextImg();
    clearInterval(interval);
    inter();
});

function nextImg() {
    if (imageCounter < imagesData.length - 1) {
        imageCounter++;
    } else {
        imageCounter = 0;
    }
    showImage(imageCounter);
}

document.querySelector('.prevImg').addEventListener('click', () => {
    prevImg();
    clearInterval(interval);
    inter();
})

const prevImg = () => {
    if (imageCounter > 0) {
        imageCounter--;
    } else {
        imageCounter = imagesData.length - 1;
    }
    showImage(imageCounter);
}