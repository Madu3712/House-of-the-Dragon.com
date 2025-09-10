// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    document.body.classList.toggle('light-theme', !isDark);
    themeSwitch.checked = isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeSwitch.addEventListener('change', () => setTheme(!themeSwitch.checked));
prefersDark.addEventListener('change', (e) => setTheme(e.matches));

const storedTheme = localStorage.getItem('theme');
setTheme(storedTheme ? storedTheme === 'dark' : prefersDark.matches);

// Lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar imagem">×</button>
    <img src="" alt="" />
`;
document.body.appendChild(lightbox);

document.querySelectorAll('.foto-galeria img').forEach(img => {
    img.addEventListener('click', () => {
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightbox.querySelector('img')) {
        lightbox.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
    }
});
