/**
 * Initializes the typewriter effect in the header section
 * Triggers the text typing animation when the DOM is loaded
 */
function runTypingEffect() {
    const text = 'I am John Doe';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 120;

    typeText(text, typingElement, typingDelay);
}

/**
 * Types out text character by character with a delay between each character
 * @param {string} text - The text to be typed
 * @param {HTMLElement} typingElement - The DOM element to display the typed text
 * @param {number} delay - Delay in milliseconds between each character
 */
function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++){
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
