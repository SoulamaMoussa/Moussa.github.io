/* Menu déroulant « À propos » : se ferme au clic à l'extérieur et avec Échap. */
(function () {
  var d = document.querySelector('.nav-dropdown details');
  if (!d) return;
  document.addEventListener('click', function (e) {
    if (d.open && !d.contains(e.target)) d.open = false;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && d.open) { d.open = false; d.querySelector('summary').focus(); }
  });
})();
