var elMenuToggler = document.querySelector('.site-header__menu-btn');
var elMenu = document.querySelector('.sitenav');

elMenuToggler.addEventListener('click', function ()
{
  elMenu.classList.toggle('sitenav--open');
});