document.addEventListener("DOMContentLoaded", function(){
    const botaoDeAcessibilidade = document.getElementById("botao-acessibilidade")
    const opcoesDeAcessibilidade = document.getElementById("opcoes-acessibilidade")
 
    botaoDeAcessibilidade.addEventListener("click", function (){
     botaoDeAcessibilidade.classList.toggle("rotacao-botao");
     opcoesDeAcessibilidade.classList.toggle("apresenta-lista")
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute("aria-expanded") === "true";
     botaoDeAcessibilidade.setAttribute("aria-expanded", !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById("aumentar-fonte");
     const diminuiFonteBotao = document.getElementById("diminuir-fonte");
     
     const alternaContraste = document.getElementById("alterna-contraste")
     const botaoModoEscuro = document.getElementById("alterna-modo-escuro");
     const botaoResetar = document.getElementById("resetar-configuracoes");

     let tamanhoAtualFonte = parseFloat(localStorage.getItem("tamanhoFonte")) || 1;
 
     aumentaFonteBotao.addEventListener("click", function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
         localStorage.setItem("tamanhoFonte", tamanhoAtualFonte);
     })
 
     diminuiFonteBotao.addEventListener("click", function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
         localStorage.setItem("tamanhoFonte", tamanhoAtualFonte);
     })
 
     alternaContraste.addEventListener("click", function(){
         document.body.classList.toggle("alto-contraste");
         localStorage.setItem("contrasteAtivo", document.body.classList.contains("alto-contraste"));
     })

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    }
    
    function resetSettings() {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("alto-contraste");
        document.body.style.fontSize = "";
        tamanhoAtualFonte = 1;
        localStorage.removeItem("darkMode");
        localStorage.removeItem("contrasteAtivo");
        localStorage.removeItem("tamanhoFonte");
    }
    
    botaoModoEscuro.addEventListener("click", toggleDarkMode);
    botaoResetar.addEventListener("click", resetSettings);
    
    // Carregar configurações salvas ao carregar a página
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
    if (localStorage.getItem("contrasteAtivo") === "true") {
        document.body.classList.add("alto-contraste");
    }
    const tamanhoFonteSalvo = localStorage.getItem("tamanhoFonte");
    if (tamanhoFonteSalvo) {
        tamanhoAtualFonte = parseFloat(tamanhoFonteSalvo);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
 
 })
 
 ScrollReveal().reveal("#inicio", { delay: 500 });
 ScrollReveal().reveal("#tropicalia", { delay: 500 });
 ScrollReveal().reveal("#galeria", { delay: 500 });
 ScrollReveal().reveal("#contato", { delay: 500 });