/* Petit utilitaire : crée des éléments sans innerHTML (texte toujours échappé). */
function h(tag, attrs, children) {
  var e = document.createElement(tag);
  Object.keys(attrs || {}).forEach(function (k) {
    if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]);
  });
  (children || []).forEach(function (c) { if (c) e.appendChild(c); });
  return e;
}
function list(items, cls) {
  return h('ul', { 'class': cls }, items.map(function (t) { return h('li', { text: t }); }));
}
