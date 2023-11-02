var button_LCI = document.getElementById("LCIButton");
var button_LCA = document.getElementById("LCAButton");
var button_CBD = document.getElementById("CBDButton");
var button_Poupança = document.getElementById("PoupançaButton");
var div_LCI = document.getElementById("LCI");
var div_LCA = document.getElementById("LCA");
var div_CBD = document.getElementById("CBD");
var div_Poupança = document.getElementById("Poupança");
var renda = document.getElementById("rendaFixaId");
var bell = document.getElementById("bellzi");
div_LCA.style.display = 'none';
div_LCI.style.display = 'none';
div_CBD.style.display = 'none';
div_Poupança.style.display = 'none';

button_LCI.addEventListener('click', () => {
    bell.style.display = 'none'; 
    div_LCI.style.display = 'block';
    div_LCA.style.display = 'none';
    div_CBD.style.display = 'none';
    div_Poupança.style.display = 'none';
});

button_LCA.addEventListener('click', () => {
    div_LCI.style.display = 'none';
    div_LCA.style.display = 'block';
    div_CBD.style.display = 'none';
    div_Poupança.style.display = 'none';
    bell.style.display = 'none'; 
});

button_CBD.addEventListener('click', () => {
    div_LCI.style.display = 'none';
    div_LCA.style.display = 'none';
    div_CBD.style.display = 'block';
    div_Poupança.style.display = 'none';
    bell.style.display = 'none'; 
});

button_Poupança.addEventListener('click', () => {
    div_LCI.style.display = 'none';
    div_LCA.style.display = 'none';
    div_CBD.style.display = 'none';
    div_Poupança.style.display = 'block';
    bell.style.display = 'none'; 
});






