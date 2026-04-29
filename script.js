function Clicou() {
    var dataAtual = new Date();
    var dataString = dataAtual.toLocaleString();
    document.getElementById("hora-atual").innerText = "hora atual : " + dataString;
};

function mudarCor() {
    const cores = [
        "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        "linear-gradient(135deg, #f6d365, #fda085)",
        "linear-gradient(135deg, #84fab0, #8fd3f4)"
    ];

    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.background = corAleatoria;
}