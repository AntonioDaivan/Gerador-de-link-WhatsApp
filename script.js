const btnLink = document.getElementById("gerarLink")
const btnCopiar = document.getElementById("copiarLink")
const btnQr = document.getElementById("btnQr")
const tela = document.getElementById("tela")
const telaQr = document.getElementById("qr-code")
const numero = document.getElementById("numero")
const mensagem = document.getElementById("mensagem")

// Gera o link
function gerarLink() {
    if(!numero.value){
        alert("Digite o seu contato")
    }else{
    const link = `https://api.whatsapp.com/send?phone=55${numero.value}&text=${mensagem.value}`
    tela.value = link
    }
}

btnLink.addEventListener("click", gerarLink)

// Copia o link 
function copiarLink (){
    let link = document.querySelector(".tela")
    link.select();
    document.execCommand("copy")
}

btnCopiar.addEventListener("click", copiarLink)

// Gera o QRCode 
function gerarQR () {
    if(!tela.value){
        alert("Gere um link primeiro.")
    }else{
        let link = tela.value
        let googleAPI = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl="
        let linkQr = googleAPI + encodeURIComponent(link)
        telaQr.src = linkQr
    }
}

btnQr.addEventListener("click", gerarQR)