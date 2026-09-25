const format = new Intl.NumberFormat('es-UY', {minimumFractionDigits: 2, maximumFractionDigits: 2});
function el(tag, className, text) { const node = document.createElement(tag); if(className) node.className=className; if(text!==undefined)node.textContent=text;return node; }
function wineCard(wine) {
 const card=el('article', `wine-card ${wine.disponible?'available':'sold-out'}`);
 const photo=el('div','wine-photo');const img=el('img');img.src=wine.foto;img.alt=`${wine.marca} ${wine.nombre}`;img.width=160;img.height=260;img.loading='lazy';photo.append(img);
 if(!wine.disponible)photo.append(el('span','stock-badge','Sin stock'));
 const info=el('div','wine-info');info.append(el('p','brand',wine.marca),el('h3','wine-name',wine.nombre));
 const detail=wine.detalle.includes('Consultar')?'750 ml · Consultar añada':`${wine.tipo} · 750 ml`;
 info.append(el('p','detail',detail));
 const finalPrice=wine.precio_final_uyu;
 const referencePrice=wine.precio_referencia_uyu ?? finalPrice/(1-wine.descuento);
 const prices=el('div','prices');
 if(wine.descuento>0)prices.append(el('p','reference-label','Precio de referencia'),el('del','previous-price',`$ ${format.format(referencePrice)}`));
 prices.append(el('p','price',`$ ${format.format(finalPrice)}`),el('p','dollars',`USD ${format.format(finalPrice/40)}`));
 if(wine.disponible && wine.descuento>0)prices.prepend(el('span','discount',`${Math.round(wine.descuento*100)}% OFF`));
 if(wine.disponible && wine.unidades)info.append(el('p','low-stock',`Solo quedan ${wine.unidades} unidades`));
 info.append(prices);card.append(photo,info);return card;
}
fetch('wines.json').then(r=>{if(!r.ok)throw new Error('Catalog unavailable');return r.json();}).then(wines=>{
 for(const wine of wines) document.querySelector(wine.disponible?'#available-wines':'#unavailable-wines').append(wineCard(wine));
 document.querySelector('.section-heading .count').textContent=`${wines.filter(w=>w.disponible).length} vinos`;
 document.querySelector('.out-heading .count').textContent=`${wines.filter(w=>!w.disponible).length} vinos`;
}).catch(()=>{document.querySelector('.load-error').hidden=false;});
