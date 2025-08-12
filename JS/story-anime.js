document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionText = document.getElementById('question-text');
    const responseText = document.getElementById('response-text');
    const sadObject = document.getElementById('sad-object');
    const glowingObject = document.getElementById('glowing-object');
    const paragraphText = document.getElementById('paragraph-text');
    const grid = document.querySelector('.grid');
    const buttonContainer = document.querySelector('.button-container');
    const explosion = document.getElementById('explosion');
    const puzzleDecor = document.querySelector('.puzzle-decor');

    const handleButtonClick = (response) => {

        questionText.classList.add('hidden');
        puzzleDecor.classList.add('hidden'); // to fade it out
        buttonContainer.style.display = 'none';
        responseText.textContent = response;
        responseText.classList.add('show');

        setTimeout(() => {
            responseText.classList.remove('show');
            sadObject.classList.add('show');

            setTimeout(() => {
                glowingObject.classList.add('fly-in');

                // 💥 Trigger explosion after glowing object reaches target
                setTimeout(() => {
                    explosion.classList.add('boom');
                    setTimeout(() => {
                        explosion.classList.remove('boom');
                    }, 1000);

                    // 🧩 Fade out objects
                    sadObject.style.opacity = '0';
                    glowingObject.style.opacity = '0';

                    // 📝 Fade out response text
                    responseText.style.opacity = '0';

                    setTimeout(() => {
                        sadObject.style.display = 'none';
                        glowingObject.style.display = 'none';

                        // ✨ Reveal puzzle
                        grid.classList.add('reveal');

                        //expand body height
                        document.body.classList.add('expand-body');

                        document.getElementById('puzzle-wrapper').classList.remove('collapsed');
                        document.getElementById('puzzle-wrapper').classList.add('expanded');
                        setTimeout(() => {
                            grid.style.opacity = '1';
                            paragraphText.classList.add('show');
                        }, 100);

                    }, 300);
                }, 1200); // After glowing ball finishes fly-in
            }, 1000); // After sad object appears
        }, 1000); // After response text
    };

    yesBtn.addEventListener('click', () => handleButtonClick('Here comes your story…'));
    noBtn.addEventListener('click', () => handleButtonClick("Doesn’t matter, I’m telling you anyway!"));

    // 🧼 Hide paragraph when user hovers on puzzle
    grid.addEventListener('mouseenter', () => {
        paragraphText.classList.remove('show');
    });
});
