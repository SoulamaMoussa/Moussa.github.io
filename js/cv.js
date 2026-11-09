/* Page « Mon CV » : construit la page à partir de cv-data.js (CV) et data.js (ME, PROJECTS). */
(function () {
  var ICONS = {
    code: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/></svg>',
    job: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/></svg>',
    cap: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/></svg>'
  };
  function icon(name, cls) {
    var s = h('span', { 'class': cls, 'aria-hidden': 'true' });
    s.innerHTML = ICONS[name];
    return s;
  }

  var root = document.getElementById('cv');
  var toc = document.getElementById('cv-toc');
  var sections = [];
  function section(id, title, nodes) {
    root.appendChild(h('section', { id: id, 'class': 'cv-section' }, [h('h2', { text: title })].concat(nodes)));
    toc.appendChild(h('a', { href: '#' + id, text: title }));
    sections.push(document.getElementById(id));
  }

  /* ----- En-tête : titre, auteur, présentation ----- */
  var initials = ME.name.split(' ').map(function (w) { return w[0]; }).join('').slice(0, 2);
  var links = [h('a', { href: ME.github, text: 'GitHub' }), h('a', { href: ME.linkedin, text: 'LinkedIn' })];
  if (CV.email) links.push(h('a', { href: 'mailto:' + CV.email, text: 'E-mail' }));
  root.appendChild(h('h1', { text: 'Mon CV' }));
  root.appendChild(h('div', { 'class': 'author' }, [
    h('div', { 'class': 'avatar', 'aria-hidden': 'true', text: initials }),
    h('div', {}, [h('strong', { text: ME.name }), h('small', { text: ME.tagline })].concat(links))
  ]));
  root.appendChild(h('p', { 'class': 'lead cv-intro', text: CV.intro }));
  if (CV.pdf) root.appendChild(h('p', {}, [h('a', { 'class': 'btn', href: CV.pdf, download: '', text: 'Télécharger mon CV (PDF)' })]));

  /* ----- Expérience : onglets + frise chronologique ----- */
  var groups = CV.experience.slice();
  if (typeof PROJECTS !== 'undefined' && PROJECTS.length) {
    groups.push({
      id: 'projets', label: CV.projectsLabel || 'Projets', icon: 'code',
      footer: { text: 'Voir tous les projets en détail →', href: 'projets.html' },
      items: PROJECTS.map(function (p) {
        var page = 'projet.html?id=' + encodeURIComponent(p.id);
        return {
          period: p.date, title: p.title, link: page, summary: p.summary,
          bulletsTitle: 'Mes tâches',
          bullets: (CV.projectTasks && CV.projectTasks[p.id]) || [],
          tags: p.tags,
          links: [['Voir le projet et le code', page]]
        };
      })
    });
  }
  groups = groups.filter(function (g) { return g.items.length; });

  function item(it, ic) {
    var org = [];
    if (it.org) org.push(h('strong', { text: it.org }));
    if (it.place) org.push(document.createTextNode((it.org ? ' · ' : '') + it.place));
    if (it.current) org.push(h('span', { 'class': 'badge-current', text: 'En cours' }));
    var title = it.link ? h('h3', {}, [h('a', { href: it.link, text: it.title })]) : h('h3', { text: it.title });
    var card = h('article', { 'class': 'tl-card' + (it.current ? ' is-current' : '') }, [
      h('div', { 'class': 'tl-date', text: it.period + (it.duration ? ' · ' + it.duration : '') }),
      title,
      org.length ? h('div', { 'class': 'tl-org' }, org) : null,
      it.summary ? h('p', { text: it.summary }) : null,
      it.bullets && it.bullets.length && it.bulletsTitle ? h('div', { 'class': 'tl-sub', text: it.bulletsTitle }) : null,
      it.bullets && it.bullets.length ? h('ul', { 'class': 'tl-bullets' }, it.bullets.map(function (b) {
        return h('li', {}, [h('strong', { text: b[0] }), document.createTextNode(' : ' + b[1])]);
      })) : null,
      it.tags && it.tags.length ? list(it.tags, 'tags') : null,
      it.links && it.links.length ? h('p', { 'class': 'tl-links' }, it.links.map(function (l) {
        return h('a', { 'class': 'btn-sm', href: l[1], text: l[0] + ' →' });
      })) : null
    ]);
    return h('li', { 'class': 'tl-item' }, [icon(ic, 'tl-icon'), card]);
  }

  function experience() {
    var panels = groups.map(function (g, i) {
      var ol = h('ol', { 'class': 'tl' }, g.items.map(function (it) { return item(it, g.icon || 'job'); }));
      var panel = h('div', { id: 'tab-' + g.id }, [ol, g.footer ? h('p', { 'class': 'tl-all' }, [h('a', { href: g.footer.href, text: g.footer.text })]) : null]);
      panel.hidden = i !== 0;
      return panel;
    });
    var nodes = [];
    if (groups.length > 1) {
      var bar = h('div', { 'class': 'cv-tabs', role: 'tablist' });
      groups.forEach(function (g, i) {
        var b = h('button', { type: 'button', 'class': 'cv-tab', role: 'tab', 'aria-selected': i === 0 ? 'true' : 'false', 'aria-controls': 'tab-' + g.id }, [
          document.createTextNode(g.label), h('span', { 'class': 'cv-count', text: String(g.items.length) })
        ]);
        b.addEventListener('click', function () {
          [].forEach.call(bar.children, function (x, j) {
            x.setAttribute('aria-selected', j === i ? 'true' : 'false');
            panels[j].hidden = j !== i;
          });
        });
        bar.appendChild(b);
      });
      nodes.push(bar);
    }
    return nodes.concat(panels);
  }

  /* ----- Formation ----- */
  function education() {
    var rows = CV.education.map(function (e) {
      return h('tr', {}, [
        h('td', { 'class': 'ico' }, [icon('cap', 'cv-icon')]),
        h('td', {}, [h('strong', { 'class': 'org', text: e.org }), h('div', { 'class': 'meta', text: [e.place, e.period].filter(Boolean).join(' · ') })]),
        h('td', {}, [h('strong', { text: e.degree })])
      ]);
    });
    return [h('div', { 'class': 'table-wrap' }, [h('table', { 'class': 'cv-table' }, [
      h('thead', {}, [h('tr', {}, [h('th', { 'aria-hidden': 'true' }), h('th', { text: 'Établissement' }), h('th', { text: 'Diplôme' })])]),
      h('tbody', {}, rows)
    ])])];
  }

  /* ----- Certifications (affichées seulement s'il y en a) ----- */
  function certifications() {
    return [h('ul', { 'class': 'certs' }, CV.certifications.map(function (c) {
      return h('li', {}, [
        c.logo ? h('img', { src: c.logo, alt: '', width: '64', height: '64' }) : icon('cap', 'cv-icon'),
        h('div', {}, [c.link ? h('a', { href: c.link, text: c.name }) : h('strong', { text: c.name }), h('div', { 'class': 'meta', text: c.issuer || '' })]),
        h('span', { 'class': 'tl-date', text: c.period || '' })
      ]);
    }))];
  }

  /* ----- Compétences ----- */
  function skills() {
    return [h('div', { 'class': 'table-wrap' }, [h('table', { 'class': 'cv-table skills-table' }, [
      h('thead', {}, [h('tr', {}, [h('th', { text: 'Catégorie' }), h('th', { text: 'Compétences et technologies' })])]),
      h('tbody', {}, CV.skills.map(function (s) {
        return h('tr', {}, [h('th', { scope: 'row', text: s[0] }), h('td', { text: s[1] })]);
      }))
    ])])];
  }

  if (groups.length) section('experience', 'Expérience', experience());
  if (CV.education.length) section('formation', 'Formation', education());
  if (CV.certifications.length) section('certifications', 'Certifications', certifications());
  if (CV.skills.length) section('competences', 'Compétences', skills());

  /* ----- Sommaire : met en évidence la section visible ----- */
  if ('IntersectionObserver' in window) {
    var tocLinks = toc.querySelectorAll('a');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) [].forEach.call(tocLinks, function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
