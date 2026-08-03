# Studio Valieri

Site institucional do **Studio Valieri**, espaço de beleza especializado em extensão de cílios, design de sobrancelhas, micropigmentação labial e make para eventos, localizado na Av. Presidente Kennedy, bairro Aviação, Praia Grande - SP.

🔗 **Site no ar:** [valieridev.github.io/studio_valieri](https://valieridev.github.io/studio_valieri/)

## Sobre

O objetivo do site é transmitir confiança, glamour e profissionalismo, e converter visitantes em agendamentos via WhatsApp. A identidade visual segue uma paleta preta e dourada, elegante e feminina.

## Tecnologias

- HTML5
- CSS3 (sem framework, CSS puro)
- JavaScript (vanilla)
- Fontes self-hosted via `@font-face` (Poppins, Inria Serif, Instrument Serif, Edu NSW ACT Cursive)
- Ícones em SVG inline (sem dependência de fonte de ícone externa)
- View Transitions API para animação de troca de página
- Hospedagem via GitHub Pages

## Estrutura do projeto

```
studio_valieri/
├── index.html                # Página inicial (hero, sobre, features, depoimentos)
├── servicos.html              # Página de serviços, galeria e tabela de valores
├── src/
│   ├── css/
│   │   ├── reset.css          # Reset de estilos base
│   │   ├── style.css          # Estilos globais e da index.html
│   │   ├── servicos.css       # Estilos específicos da servicos.html
│   │   ├── animations.css     # Animações de entrada (scroll/observer)
│   │   ├── responsive.css     # Media queries (breakpoints mobile/tablet)
│   │   └── fonts-face.css     # Declarações @font-face das fontes self-hosted
│   ├── fonts/                  # Arquivos .woff2 das fontes usadas no site
│   ├── img/
│   │   ├── servicos/           # Fotos de antes/depois e galeria de trabalhos
│   │   └── ...                  # Logos, imagens de seção
│   └── scripts/
│       └── script.js            # Menu mobile, IntersectionObserver, interações
└── README.md
```

## Páginas

- **index.html** — Hero, seção "Sobre o Studio", diferenciais ("Por que nos escolher"), sobre a Lash Designer, depoimentos e botão flutuante de WhatsApp.
- **servicos.html** — Lista de serviços com ícones, galeria de fotos de trabalhos realizados (antes/depois) e tabela de valores.

## Como rodar localmente

Não há build nem dependências — é só abrir o `index.html` direto no navegador, ou servir a pasta com qualquer servidor estático:

```bash
# Python
python3 -m http.server 8000

# Node (http-server)
npx http-server .
```

Depois acessar `http://localhost:8000`.

## Contato do negócio

- **WhatsApp:** (11) 91590-2809
- **Instagram:** [@studio_valierii](https://www.instagram.com/studio_valierii)
- **Endereço:** Av. Pres. Kennedy, 4563 - Aviação, Praia Grande - SP, 11702-485
- **Avalie no Google:** [deixar avaliação](https://search.google.com/local/writereview?placeid=ChIJgX8yBWsfzpQRRp3OH_SH3Dw)

## Autor

Desenvolvido por **Pedro Valieri**.
