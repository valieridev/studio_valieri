 document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o salto seco padrão

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Ajuste aqui a altura do seu header para não cobrir o título (10vh)
            const headerOffset = window.innerHeight * 0.10; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Função para criar o efeito de desaceleração (Cubic Easing)
            const smoothScrollTo = (targetPosition, duration) => {
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;

                const animation = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    
                    // Conta matemática para desacelerar suavemente no final
                    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                    
                    window.scrollTo(0, run);

                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                };

                // Função matemática de transição (pode mudar se quiser outro efeito)
                const easeInOutCubic = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                };

                requestAnimationFrame(animation);
            };

            // SEGUNDO PARÂMETRO (1200) É O TEMPO EM MILISSEGUNDOS (1.2 segundos)
            // Aumente para ir mais devagar, diminua para ir mais rápido!
            smoothScrollTo(offsetPosition, 800); 
        }
        });
      });

      const paragraphs = document.querySelectorAll('.texto');

// Configurações do observador
const options = {
  root: null, // usa a tela do navegador como referência
  threshold: 0.1, // dispara quando 10% do elemento estiver visível
  rootMargin: "0px 0px -50px 0px" // dispara um pouco antes do elemento aparecer totalmente
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // Se o elemento estiver visível na tela
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      // Opcional: para a animação acontecer só uma vez, descomente a linha abaixo
      // observer.unobserve(entry.target);
    } else {
      // Opcional: se quiser que a animação aconteça toda vez que subir/descer a página
      entry.target.classList.remove('appear');
    }
  });
}, options);

// Diz ao observador para monitorar cada um dos parágrafos
paragraphs.forEach(paragraph => {
  observer.observe(paragraph);
});