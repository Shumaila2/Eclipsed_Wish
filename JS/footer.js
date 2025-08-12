document.addEventListener('DOMContentLoaded', () => {
    const baseContainer = document.querySelector('.base-sparkles');
    const floatContainer = document.querySelector('.float-sparkles');
    console.log("sparkle created");

    console.log("Base container:", baseContainer);
    console.log("Float container:", floatContainer);

    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle base';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        baseContainer.appendChild(sparkle);
    }

    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle float';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = '0'; // starts from bottom
        sparkle.style.animationDelay = `${Math.random() * 6}s`;
        floatContainer.appendChild(sparkle);
    }
});
