
function generateRandomValues(canvasId, randomFunction) {


    const canvas = document.getElementById(canvasId);
    const size = canvas.width;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;
    const randomInt = randomFunction;


    for (let i = 0; i < size * size; i++) {
        const x = randomInt(size);
        const y = randomInt(size);
        const index = (x + y * size) * 4;
        data[index] = 0;
        data[index + 1] = 0;
        data[index + 2] = 0;
        data[index + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
}

generateRandomValues('math-random-canvas', (maxIncluding) => Math.floor(Math.random() * (maxIncluding + 1)));
generateRandomValues('crypto-getRandomValues-canvas', (maxIncluding) => getRandomIntInclusive(0, maxIncluding));


function getRandomIntInclusive(min, max) {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer);

    let randomNumber = randomBuffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}
