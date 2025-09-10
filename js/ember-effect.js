function createEmbers() {
    const container = document.createElement('div');
    container.className = 'ember-container';
    document.body.appendChild(container);

    function addEmber() {
        const ember = document.createElement('div');
        ember.className = 'ember';
        
        // Posição inicial aleatória
        ember.style.left = `${Math.random() * 100}%`;
        ember.style.bottom = '0';
        
        // Tamanho aleatório
        const size = 2 + Math.random() * 4;
        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;
        
        // Duração da animação aleatória
        const duration = 2 + Math.random() * 2;
        ember.style.animation = `float-ember ${duration}s ease-in infinite`;
        
        container.appendChild(ember);
        
        // Remove a brasa após a animação
        setTimeout(() => ember.remove(), duration * 1000);
    }

    // Criar brasas continuamente
    setInterval(addEmber, 100);
}

window.addEventListener('load', createEmbers);
