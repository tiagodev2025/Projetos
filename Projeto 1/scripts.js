let imagem = document.querySelector(".starbucks")

function trocaImagem(endereco){
    imagem.src = endereco
}

function trocaImagem(elemento) {
    // Troca a imagem principal
    const imagemPrincipal = document.querySelector('.starbucks');
    if (imagemPrincipal) {
        imagemPrincipal.src = elemento.dataset.img;
    }

    // Troca a cor do círculo
    const circulo = document.querySelector('.circulo');
    circulo.className = 'circulo'; // reset
    circulo.classList.add(elemento.dataset.cor);
}
