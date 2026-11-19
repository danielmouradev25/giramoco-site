# Gira Moço · site

Visual da loja [Gira Moço](https://montink.com/giramoco/) na Montink.

- `src/gm3d.js`: capa 3D "Mata" da página inicial (código fonte)
- `gm3d.min.js`: versão compacta que a loja carrega
- `assets/`: imagens da marca
- `prototipo.html`: protótipo completo do site

## Como a loja carrega

Na Montink: Minha loja → Temas → Editar tema → Configs → Scripts & CSS Personalizados → **Script Head**:

```js
(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/danielmouradev25/giramoco-site@VERSAO/gm3d.min.js';document.head.appendChild(s);})();
```

Troque `VERSAO` pelo código do commit da versão (ex.: `59fbefbc141e245a6aefc1edabad67c8f3a5b395`, a v1). Para voltar a uma versão anterior, é só trocar pelo commit dela.
Para desligar a capa, apague o Script Head e salve.
