const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos');

botaoEsconderProjetos.classList.add("remover");

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
    botaoEsconderProjetos.classList.remove("remover");
});

botaoEsconderProjetos.addEventListener('click', () => {
    esconderProjetos();
    mostrarBotao();
    botaoEsconderProjetos.classList.add("remover");
})

function mostrarBotao() {
    botaoMostrarProjetos.classList.remove("remover");
}

function esconderProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}