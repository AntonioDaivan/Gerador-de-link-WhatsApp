const btnLink = document.getElementById("gerarLink")
const btnCopiar = document.getElementById("copiarLink")
const btnQr = document.getElementById("btnQr")

function gerarLink() {
    const numero = document.getElementById("numero").value
    const mensagem = document.getElementById("mensagem").value
    const tela = document.getElementById("tela")

    if (!numero) {
        alert("Digite o seu contato")
    } else if (numero.length !== 11) {
        alert('Número inválido!')
    } else {
        const link = `https://wa.me/55${numero}?text=${mensagem}`
        tela.value = link.replaceAll(' ', '%20')
    }
}

function copiarLink() {
    let link = document.querySelector(".tela-link").value
    navigator.clipboard.writeText(link)
}

function gerarQR() {
    const tela = document.getElementById("tela")
    const telaQr = document.getElementById("qr-code")

    if (!tela.value) {
        alert("Gere um link primeiro.")
    } else {
        let link = tela.value.replaceAll(' ', '%20')
        let googleAPI = "https://quickchart.io/qr?text="
        let linkQr = googleAPI + encodeURIComponent(link)
        telaQr.style.visibility = 'visible'
        telaQr.src = linkQr
    }
}

btnLink.addEventListener("click", gerarLink)
btnCopiar.addEventListener("click", copiarLink)
btnQr.addEventListener("click", gerarQR)