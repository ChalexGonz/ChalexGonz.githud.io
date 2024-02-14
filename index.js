function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    document.body.appendChild(flower);

    const x = Math.random() * window.innerWidth;
    flower.style.left = `${x}px`;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    document.body.appendChild(heart);

    heart.style.left = `${x}px`;

    const y = Math.random() * window.innerHeight;
    flower.style.top = heart.style.top = `${y}px`;

    heart.style.fontSize = `${Math.random() * 20 + 10}px`;

    setTimeout(() => {
        flower.style.display = 'block';
        heart.style.display = 'block';
    }, Math.random() * 5000);
}

setInterval(createFlower, 1000);

setTimeout(() => {
    document.getElementById('message').style.display = 'block';
}, 5000);
