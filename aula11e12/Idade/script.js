function verificar(){

  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.querySelector("#txtano");
  let res = document.querySelector("#res");

  if (fano.value.length == 0 || Number(fano.value) > ano){
    alert("[ERRO] Verifique os dados e tente novamente");
  } else{
      let fsex = document.getElementsByName("radsex");
      let idade = ano - Number(fano.value);
      let genero = "";
      let img = document.createElement("img");
      img.setAttribute("id", "foto"); //cria um id para o elemento diretamente pelo JS. Não precisa colocar no html

      if (fsex[0].checked){
        genero = "Homem";
        if (idade >= 0 && idade < 12){
          //criança
          img.setAttribute("src", "imagens/meninobebe.png");
        } else if (idade <18) {
          //adolescente
          img.setAttribute("src", "imagens/homemadolescente.png");
        } else if (idade < 24){
          //jovem adulto
          img.setAttribute("src", "imagens/homemjovem.png");
        } else if (idade < 59){
          //adulto
          img.setAttribute("src", "imagens/homemadulto.png");
        } else {
          //idoso
          img.setAttribute("src", "imagens/homemidoso.png");
        }

      } else if (fsex[1].checked){
          genero = "Mulher";
          if (idade >= 0 && idade < 12){
            //criança
            img.setAttribute("src", "imagens/meninabebe.png");
          } else if (idade <18) {
            //adolescente
            img.setAttribute("src", "imagens/mulheradolescente.png");
          } else if (idade < 24){
            //jovem adulto
            img.setAttribute("src", "imagens/mulherjovem.png");
          } else if (idade < 59){
            //adulto
            img.setAttribute("src", "imagens/mulheradulta.png");
          } else {
            //idoso
            img.setAttribute("src", "imagens/mulheridosa.png");
          }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      res.appendChild(img);
  }

}