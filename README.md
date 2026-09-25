# BuenosVinos

Catálogo web de vinos argentinos con reservas por WhatsApp y entrega incluida. Precios en pesos uruguayos y dólares.

🔗 https://buenos-vinos-a-tu-casa.vercel.app

## Estructura

- `index.html`: página principal
- `styles.css`: estilos
- `app.js`: arma las tarjetas de vinos a partir de `wines.json`
- `wines.json`: lista de vinos (precio, descuento, foto y stock)
- `assets/`: fotos de los vinos y de portada

## Cómo agregar o editar un vino

Editá `wines.json`. Cada vino tiene:

- `disponible`: `true` aparece en "Para reservar"; `false`, en "Sin stock"
- `precio_final_uyu`: precio con descuento
- `precio_referencia_uyu`: precio sin descuento (opcional)
- `descuento`: por ejemplo `0.25` = 25 %
- `foto`: ruta de la imagen dentro de `assets/`

## Publicación

Es un sitio estático sin build. Vercel publica automáticamente cada cambio que se sube a `main`.
