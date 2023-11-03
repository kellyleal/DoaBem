document.addEventListener("DOMContentLoaded", () => {
    const telaInicial = document.getElementById("tela-inicial");
    const doadorForm = document.getElementById("doador");
    const produtorAduboForm = document.getElementById("produtor-adubo");
    const instituicaoSolicitanteForm = document.getElementById("instituicao-solicitante");

    doadorForm.style.display = "none";
    produtorAduboForm.style.display = "none";
    instituicaoSolicitanteForm.style.display = "none";
      document.querySelector("a[href='#doador']").addEventListener("click", () => {
        telaInicial.style.display = "none";
        doadorForm.style.display = "block";
    });

    document.querySelector("a[href='#produtor-adubo']").addEventListener("click", () => {
        telaInicial.style.display = "none";
        produtorAduboForm.style.display = "block";
    });

    document.querySelector("a[href='#instituicao-solicitante']").addEventListener("click", () => {
        telaInicial.style.display = "none";
        instituicaoSolicitanteForm.style.display = "block";
    });
   
    const botoesVoltar = document.querySelectorAll("#voltar");  

    botoesVoltar.forEach((botao) => {
        botao.addEventListener("click", () => {
         
            telaInicial.style.display = "block";
            doadorForm.style.display = "none";
            produtorAduboForm.style.display = "none";
            instituicaoSolicitanteForm.style.display = "none";
        });
    });

});