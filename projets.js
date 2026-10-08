/* Page « Projets » : affiche la grille de cartes à partir de data.js. */
(function () {
  var grid = document.getElementById('grid');
  PROJECTS.forEach(function (p, i) {
    var c = i % 2 ? 'var(--accent)' : 'var(--dot)';
    var art = document.createElement('div');
    art.innerHTML = '<svg viewBox="0 0 320 144" aria-hidden="true"><path d="M0 144V96C30 70 50 110 80 84S130 40 160 70 210 110 240 62 290 40 320 58V144Z" fill="' + c + '" opacity=".35"/><path d="M0 144V112C30 92 55 124 85 104S135 66 165 92 215 124 245 86 290 70 320 84V144Z" fill="' + c + '" opacity=".7"/></svg>';
    var card = h('a', { 'class': 'card', href: 'projet.html?id=' + encodeURIComponent(p.id) }, [
      art.firstChild,
      h('div', { 'class': 'in' }, [
        h('h3', { text: p.title }),
        h('div', { 'class': 'meta', text: p.date }),
        list(p.tags, 'tags'),
        h('p', { text: p.summary })
      ])
    ]);
    grid.appendChild(card);
  });
})();
