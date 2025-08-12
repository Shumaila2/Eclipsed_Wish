function scrollMeTheWay(selector, buffer = 20, speed = 2) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        // Create a span wrapper around the existing text content
        const textContent = element.innerHTML;
        const textWrapper = document.createElement('span');
        textWrapper.innerHTML = textContent;
        textWrapper.style.display = 'inline-block';
        textWrapper.style.whiteSpace = 'nowrap';
        textWrapper.style.padding = '0 15px';
        element.innerHTML = '';
        element.appendChild(textWrapper);

        // Apply necessary styles to the container element
        element.style.overflow = 'hidden';
        element.style.whiteSpace = 'nowrap';
        element.style.textOverflow = 'ellipsis';
        element.style.position = 'relative';

        let currentIndent = 0;
        let animationFrameId = null;

        const startAnimation = () => {
            const contentWidth = textWrapper.scrollWidth;
            const containerWidth = element.offsetWidth;
            const maxIndent = contentWidth - containerWidth + buffer;

            const animate = () => {
                if (currentIndent < maxIndent) {
                    currentIndent += speed;
                    textWrapper.style.transform = `translateX(-${currentIndent}px)`;
                    animationFrameId = requestAnimationFrame(animate);
                } else {
                    // Stop the animation when it reaches the end
                    cancelAnimationFrame(animationFrameId);
                }
            };

            animationFrameId = requestAnimationFrame(animate);
        };

        const resetIndent = () => {
            currentIndent = 0;
            textWrapper.style.transform = `translateX(0px)`;
        };

        const stopAnimation = () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            resetIndent();
        };

        element.addEventListener('mouseenter', startAnimation);
        element.addEventListener('mouseleave', stopAnimation);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const jokes = document.querySelectorAll('.jokes');
    if (jokes.length > 0) {
        scrollMeTheWay('.jokes', 20, 2);
    }
});