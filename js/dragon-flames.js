function createFlames() {
    const container = document.createElement('div');
    container.className = 'flame-container';
    
    for (let i = 0; i < 50; i++) {
        const flame = document.createElement('div');
        flame.className = 'flame';
        
        // Posição aleatória
        flame.style.left = `${Math.random() * 100}%`;
        
        // Tamanho aleatório
        const size = 30 + Math.random() * 50;
        flame.style.width = `${size}px`;
        flame.style.height = `${size}px`;
        
        // Animação personalizada
        flame.style.animation = `flameFlicker ${0.3 + Math.random() * 0.5}s infinite alternate`;
        
        container.appendChild(flame);
    }
    
    document.body.appendChild(container);
}

// Animar chamas com o movimento do mouse
document.addEventListener('mousemove', (e) => {
    const flames = document.querySelectorAll('.flame');
    const mouseX = e.clientX / window.innerWidth;
    
    flames.forEach(flame => {
        const randomOffset = (Math.random() - 0.5) * 20;
        flame.style.transform = `rotate(${-45 + (mouseX * 45) + randomOffset}deg)`;
    });
});

// Efeito de explosão ao clicar
document.addEventListener('click', (e) => {
    const explosion = document.createElement('div');
    explosion.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle at center, #ffd700, #ff4500);
        border-radius: 50%;
        z-index: 1000;
        pointer-events: none;
    `;
    
    document.body.appendChild(explosion);
    
    explosion.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(3)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => explosion.remove();
});

window.addEventListener('load', createFlames);
