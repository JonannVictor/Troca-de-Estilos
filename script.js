const button = document.getElementById('style-button');
const themeStyle = document.getElementById('theme-style');
const logo = document.getElementById('logo');
let currentStyle = 1;

button.addEventListener('click', () => {
    currentStyle = (currentStyle % 3) + 1; // Alterna entre 1, 2 e 3
    themeStyle.setAttribute('href', `style${currentStyle}.css`);

    // Exibe ou oculta a logo do Internacional
    if (currentStyle === 2) {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }
});