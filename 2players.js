var numGoleiro0 = [];

function sortearGoleiros0() {
  var caixaGoleiros0 = document.getElementById("goleiro0");
  var caixaGoleiros1 = document.getElementById("goleiro1");

  while (numGoleiro0.length < 2) {
    var sortearGoleiro0 = Math.floor(Math.random() * goleiros.length);

    if (numGoleiro0.indexOf(sortearGoleiro0) == -1) {
      numGoleiro0.push(sortearGoleiro0);
    }
  }

  caixaGoleiros0.innerHTML = goleiros[numGoleiro0[0]]["nome"];
  caixaGoleiros1.innerHTML = goleiros[numGoleiro0[1]]["nome"];
}

document
  .getElementById("sortearGoleiro0")
  .addEventListener("click", sortearGoleiros0);

//   \\\\\\\\\\\\\\\\\\ZAGUEIROS\\\\\\\\\\\\\\\\\\

var numZagueiros0 = [];
var numLateraisE = [];
var numLateraisD = [];

function sortearZagueiros() {
  var caixaLateralEP1 = document.getElementById("lateralEsquerdo0");
  var caixaLateralEP2 = document.getElementById("lateralEsquerdo1");

  var caixaLateralDP1 = document.getElementById("lateralDireito0");
  var caixaLateralDP2 = document.getElementById("lateralDireito1");

  var caixaZagueiroP1 = document.getElementById("zagueiro11");
  var caixaZagueiroP11 = document.getElementById("zagueiro12");

  var caixaZagueiroP2 = document.getElementById("zagueiro01");
  var caixaZagueiroP22 = document.getElementById("zagueiro02");

  while (numZagueiros0.length < 4) {
    var sortearZaga = Math.floor(Math.random() * zagueiros.length);
    if (numZagueiros0.indexOf(sortearZaga) == -1) {
      numZagueiros0.push(sortearZaga);
    }
  }

  while(numLateraisD.length < 2){
    var sortearLateralD = Math.floor(Math.random() * lateraisD.length);
    if (numLateraisD.indexOf(sortearLateralD) == -1) {
      numLateraisD.push(sortearLateralD);
    }

  }

  while (numLateraisE.length < 2) {
    
    var sortearLateralE = Math.floor(Math.random() * lateraisE.length);

    if (numLateraisE.indexOf(sortearLateralE) == -1) {
      numLateraisE.push(sortearLateralE);
    }

    
  }

  caixaLateralDP1.innerHTML = lateraisD[numLateraisD[0]]["nome"];
  caixaLateralDP2.innerHTML = lateraisD[numLateraisD[1]]["nome"];

  caixaLateralEP1.innerHTML = lateraisE[numLateraisE[0]]["nome"];
  caixaLateralEP2.innerHTML = lateraisE[numLateraisE[1]]["nome"];

  caixaZagueiroP1.innerHTML = zagueiros[numZagueiros0[0]]["nome"];
  caixaZagueiroP11.innerHTML = zagueiros[numZagueiros0[1]]["nome"];
  caixaZagueiroP2.innerHTML = zagueiros[numZagueiros0[2]]["nome"];
  caixaZagueiroP22.innerHTML = zagueiros[numZagueiros0[3]]["nome"];
}

document
  .getElementById("sortearZagueiro0")
  .addEventListener("click", sortearZagueiros);

//   \\\\\\\\\\\\\\\\\\MEIO-CAMPO\\\\\\\\\\\\\\\\\\

var numVolantes = [];
var numMeioCampo = [];

function sortearMeioCampo() {
  var caixaVolantesP1 = document.getElementById("volante0");
  var caixaVolantesP2 = document.getElementById("volante1");

  var caixaMeioCampoP1 = document.getElementById("meioCampo02");
  var caixaMeioCampoP11 = document.getElementById("meioCampo03");
  var caixaMeioCampoP111 = document.getElementById("meioCampo04");

  var caixaMeioCampoP2 = document.getElementById("meioCampo12");
  var caixaMeioCampoP22 = document.getElementById("meioCampo13");
  var caixaMeioCampoP222 = document.getElementById("meioCampo14");

  while (numMeioCampo.length < 6) {
    var sortearMeioCampo = Math.floor(Math.random() * meioCampo.length);

    if (numMeioCampo.indexOf(sortearMeioCampo) == -1) {
      numMeioCampo.push(sortearMeioCampo);
    }
  }

  while (numVolantes.length < 2) {
    var sortearVolante = Math.floor(Math.random() * volantes.length);

    if (numVolantes.indexOf(sortearVolante) == -1) {
      numVolantes.push(sortearVolante);
    }
  }

  caixaVolantesP1.innerHTML = volantes[numVolantes[0]]["nome"];
  caixaVolantesP2.innerHTML = volantes[numVolantes[1]]["nome"];

  caixaMeioCampoP1.innerHTML = meioCampo[numMeioCampo[0]]["nome"];
  caixaMeioCampoP11.innerHTML = meioCampo[numMeioCampo[1]]["nome"];
  caixaMeioCampoP111.innerHTML = meioCampo[numMeioCampo[2]]["nome"];
  caixaMeioCampoP2.innerHTML = meioCampo[numMeioCampo[3]]["nome"];
  caixaMeioCampoP22.innerHTML = meioCampo[numMeioCampo[4]]["nome"];
  caixaMeioCampoP222.innerHTML = meioCampo[numMeioCampo[5]]["nome"];
}

document
  .getElementById("sortearMeioCampo0")
  .addEventListener("click", sortearMeioCampo);

//   \\\\\\\\\\\\\\\\\\ATAQUE\\\\\\\\\\\\\\\\\\

var numCentroavantes = [];
var numPontaEsquerda = [];
var numPontaDireita = [];

function sortearCentroavantes() {
  var caixaCentroavanteP1 = document.getElementById("centroavante0");
  var caixaCentroavanteP11 = document.getElementById("centroavante02");

  var caixaCentroavanteP2 = document.getElementById("centroavante1");
  var caixaCentroavanteP22 = document.getElementById("centroavante12");

  var caixaPontaEP1 = document.getElementById("pontaEsquerda0");
  var caixaPontaEP11 = document.getElementById("pontaEsquerda02");

  var caixaPontaEP2 = document.getElementById("pontaEsquerda1");
  var caixaPontaEP22 = document.getElementById("pontaEsquerda12");

  var caixaPontaDP1 = document.getElementById("pontaDireita0");
  var caixaPontaDP2 = document.getElementById("pontaDireita1");


while(numPontaDireita.length < 2){
  var sortearPontaDireita = Math.floor(Math.random() * pontasD.length);

  if(numPontaDireita.indexOf(sortearPontaDireita) == -1){
    numPontaDireita.push(sortearPontaDireita);
  }
}

  while(numPontaEsquerda.length < 4){
    var sortearPontaEsquerda = Math.floor(Math.random() * pontasE.length);
    
 
    if(numPontaEsquerda.indexOf(sortearPontaEsquerda) == -1){
      numPontaEsquerda.push(sortearPontaEsquerda);
    }
  }

 while(numCentroavantes.length < 4){
   var sortearCentroavante = Math.floor(Math.random() * centroavantes.length);

   if(numCentroavantes.indexOf(sortearCentroavante) == -1){
     numCentroavantes.push(sortearCentroavante);
   }
 }


caixaCentroavanteP1.innerHTML = centroavantes[numCentroavantes[0]]["nome"];
caixaCentroavanteP11.innerHTML = centroavantes[numCentroavantes[1]]["nome"];
caixaCentroavanteP2.innerHTML = centroavantes[numCentroavantes[2]]["nome"];
caixaCentroavanteP22.innerHTML = centroavantes[numCentroavantes[3]]["nome"];

caixaPontaEP1.innerHTML = pontasE[numPontaEsquerda[0]]["nome"];
caixaPontaEP11.innerHTML = pontasE[numPontaEsquerda[1]]["nome"];
caixaPontaEP2.innerHTML = pontasE[numPontaEsquerda[2]]["nome"];
caixaPontaEP22.innerHTML = pontasE[numPontaEsquerda[3]]["nome"];

caixaPontaDP1.innerHTML = pontasD[numPontaDireita[0]]["nome"];
caixaPontaDP2.innerHTML = pontasD[numPontaDireita[1]]["nome"];



}


document
  .getElementById("sortearAtaque0")
  .addEventListener("click", sortearCentroavantes);

  var nJogadores0 = [];
  var numS0 = [];

  function sortearPlayer0() {



    var btn10 = document.getElementById("btn10").value;
    var btn20 = document.getElementById("btn20").value;
    

    var cx10 = document.getElementById("jog1");
    var cx20 = document.getElementById("jog2");
    
    

    nJogadores0.push(btn10);
    nJogadores0.push(btn20);
    

    

  while(numS0.length < 2){
    var sortearJ0 = Math.floor(Math.random() * nJogadores0.length);

    if(numS0.indexOf(sortearJ0) == -1){
      numS0.push(sortearJ0);
    }

  }

cx10.innerHTML = nJogadores0[numS0[0]];
cx20.innerHTML = nJogadores0[numS0[1]];


  }

  document.getElementById("btnsortear0").addEventListener("click", sortearPlayer0);