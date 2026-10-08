/* Page « Projet » : affiche la fiche du projet demandé dans l'URL (?id=...). */
(function () {
  var app = document.getElementById('app');
  var id = new URLSearchParams(location.search).get('id');
  var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
  if (!p) {
    app.appendChild(h('h1', { text: 'Projet introuvable' }));
    app.appendChild(h('p', {}, [h('a', { href: 'projets.html', text: 'Retour aux projets' })]));
    return;
  }
  document.title = p.title + ' – ' + ME.name;
  var initials = ME.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2);

  var author = h('div', { 'class': 'author' }, [
    h('div', { 'class': 'avatar', 'aria-hidden': 'true', text: initials }),
    h('div', {}, [
      h('strong', { text: ME.name }),
      h('small', { text: ME.tagline }),
      h('a', { href: ME.github, text: 'GitHub' }),
      h('a', { href: ME.linkedin, text: 'LinkedIn' })
    ])
  ]);

  var stack = h('div', { 'class': 'stack' }, [
    h('strong', { text: 'Outils' }), list(p.stack, 'skills'),
    h('a', { 'class': 'btn', href: p.repo, text: 'Code source' })
  ]);

  var article = h('article', {}, [
    h('h1', { text: p.title }),
    h('div', { 'class': 'meta', text: p.date }),
    list(p.tags, 'tags'), author,
    h('p', { 'class': 'lead', text: p.lead }), stack
  ]);

  if (p.stats.length) article.appendChild(h('div', { 'class': 'stats' }, p.stats.map(function (s) {
    return h('div', {}, [h('b', { text: s[0] }), document.createTextNode(s[1])]);
  })));
  if (p.note) article.appendChild(h('div', { 'class': 'note' }, [h('strong', { text: 'Note de transparence. ' }), document.createTextNode(p.note)]));

  var toc = h('aside', { 'class': 'toc', 'aria-label': 'Sommaire' });
  p.sections.forEach(function (s, i) {
    article.appendChild(h('h2', { id: 's' + i, text: s[0] }));
    article.appendChild(h('p', { text: s[1] }));
    toc.appendChild(h('a', { href: '#s' + i, text: s[0] }));
  });

  app.appendChild(h('p', {}, [h('a', { 'class': 'back', href: 'projets.html', text: '← Projets' })]));
  app.appendChild(h('div', { 'class': 'layout' }, [article, toc]));
})();
