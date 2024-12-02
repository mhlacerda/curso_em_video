function carregar(){
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let bom = document.getElementById("bom");  
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();


  if (hora === 0 && minuto === 0) {
    msg.innerHTML = `Agora é meia-noite em ponto.`; // Caso especial para 00:00
  } else if (hora === 0) {
    msg.innerHTML = `Agora é meia-noite e ${minuto} ${minuto === 1 ? "minuto" : "minutos"}.`; // Caso especial para 00:XX
  } else if (hora === 1 && minuto === 1) {
    msg.innerHTML = `Agora é ${hora} hora e ${minuto} minuto.`; // Singular para ambos
  } else if (hora === 1) {
    msg.innerHTML = `Agora é ${hora} hora e ${minuto} ${minuto === 1 ? "minuto" : "minutos"}.`; // Singular para hora
  } else if (minuto === 1) {
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minuto.`; // Singular para minuto
  } else {
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`; // Plural para ambos
  }

  if (hora >= 0 && hora < 12){
    bom.innerHTML = "Bom dia!";
    img.src = "images/manha.png";
    document.body.style.backgroundColor = "#e2cd9f";

  } else if (hora >= 12 && hora < 18){
    bom.innerHTML = "Boa tarde!";
    img.src = "images/tarde.png";
    document.body.style.backgroundColor = "#b9846f";
  } else {
    bom.innerHTML = "Boa noite!";
    img.src = "images/noite.png";
    document.body.style.background = "#040446";
  }
};




