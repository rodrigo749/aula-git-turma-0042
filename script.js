function Clicou() {
    var dataAtual = new Date();
    var dataString = dataAtual.toLocaleString();
    document.getElementById("hora-atual").innerText = "hora atual : " + dataString;
};