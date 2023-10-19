var button_acoes = document.getElementById("acoesButton");
var button_fii = document.getElementById("fiiButton");
var div_acoes = document.getElementById("acoes");
var div_fii = document.getElementById("fii");
var renda = document.getElementById("rendaVariavelId");
var bell = document.getElementById("bellzi");
div_fii.style.display = 'none';
div_acoes.style.display = 'none';

button_acoes.addEventListener('click', () => {
    bell.style.display = 'none'; 
    div_acoes.style.display = 'block';
    div_fii.style.display = 'none';
});

button_fii.addEventListener('click', () => {
    div_acoes.style.display = 'none';
    div_fii.style.display = 'block';
    bell.style.display = 'none'; 
});






