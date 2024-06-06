document.addEventListener('DOMContentLoaded', () => {
    const name = "Vaibhu";
    const pictureUrl = "picture.jpeg"; // Replace with the path to the picture

    document.getElementById('name').textContent = name;
    document.getElementById('picture').src = pictureUrl;

    const flowerContainer = document.getElementById('flower-container');

    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flowerContainer.appendChild(flower);
    }
});
