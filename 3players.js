var nGoleiros = [];

function sorteioGoleiros() {
  var caixaDeGoleirosP1 = document.getElementById("goleiro100");
  var caixaDeGoleirosP2 = document.getElementById("goleiro200");
  var caixaDeGoleirosP3 = document.getElementById("goleiro300");

  while (nGoleiros.length < 3) {
    var sorteioGoleiros = Math.floor(Math.random() * goleiros.length);

    if (nGoleiros.indexOf(sorteioGoleiros) == -1) {
      nGoleiros.push(sorteioGoleiros);
    }
  }

  caixaDeGoleirosP1.innerHTML = goleiros[nGoleiros[0]]["nome"];
  caixaDeGoleirosP2.innerHTML = goleiros[nGoleiros[1]]["nome"];
  caixaDeGoleirosP3.innerHTML = goleiros[nGoleiros[2]]["nome"];
}

document
  .getElementById("sortearGoleiroP3")
  .addEventListener("click", sorteioGoleiros);

//   \\\\\\\\\\\\\\\\ZAGA\\\\\\\\\\\\\\\\\\

var nLateraisD = [];
var nZagueiros = [];
var nLateraisE = [];

function sorteioZaga() {
  var caixaDeLateralDP1 = document.getElementById("lateralDireito100");
  var caixaDeLateralDP2 = document.getElementById("lateralDireito200");
  var caixaDeLateralDP3 = document.getElementById("lateralDireito300");

  var caixaDeLateralEP1 = document.getElementById("lateralEsquerdo100");
  var caixaDeLateralEP2 = document.getElementById("lateralEsquerdo200");
  var caixaDeLateralEP3 = document.getElementById("lateralEsquerdo300");

  var caixaDeZagaEP1 = document.getElementById("zagueiro100");
  var caixaDeZagaEP11 = document.getElementById("zagueiro101");

  var caixaDeZagaEP2 = document.getElementById("zagueiro200");
  var caixaDeZagaEP22 = document.getElementById("zagueiro201");

  var caixaDeZagaEP3 = document.getElementById("zagueiro300");
  var caixaDeZagaEP33 = document.getElementById("zagueiro301");

  while (nLateraisD.length < 3) {
    var sorteioLD = Math.floor(Math.random() * lateraisD.length);

    if (nLateraisD.indexOf(sorteioLD) == -1) {
      nLateraisD.push(sorteioLD);
    }
  }

  while (nLateraisE.length < 3) {
    var sorteioLE = Math.floor(Math.random() * lateraisE.length);

    if (nLateraisE.indexOf(sorteioLE) == -1) {
      nLateraisE.push(sorteioLE);
    }
  }

  while (nZagueiros.length < 6) {
    var sorteioZaga = Math.floor(Math.random() * zagueiros.length);

    if (nZagueiros.indexOf(sorteioZaga) == -1) {
      nZagueiros.push(sorteioZaga);
    }
  }

  caixaDeLateralDP1.innerHTML = lateraisD[nLateraisD[0]]["nome"];
  caixaDeLateralDP2.innerHTML = lateraisD[nLateraisD[1]]["nome"];
  caixaDeLateralDP3.innerHTML = lateraisD[nLateraisD[2]]["nome"];

  caixaDeLateralEP1.innerHTML = lateraisE[nLateraisE[0]]["nome"];
  caixaDeLateralEP2.innerHTML = lateraisE[nLateraisE[1]]["nome"];
  caixaDeLateralEP3.innerHTML = lateraisE[nLateraisE[2]]["nome"];

  caixaDeZagaEP1.innerHTML = zagueiros[nZagueiros[0]]["nome"];
  caixaDeZagaEP11.innerHTML = zagueiros[nZagueiros[1]]["nome"];

  caixaDeZagaEP2.innerHTML = zagueiros[nZagueiros[2]]["nome"];
  caixaDeZagaEP22.innerHTML = zagueiros[nZagueiros[3]]["nome"];

  caixaDeZagaEP3.innerHTML = zagueiros[nZagueiros[4]]["nome"];
  caixaDeZagaEP33.innerHTML = zagueiros[nZagueiros[5]]["nome"];
}

document
  .getElementById("sortearZagueiroP3")
  .addEventListener("click", sorteioZaga);

//   \\\\\\\\\\\\\\\\MEIO CAMPO\\\\\\\\\\\\\\\\\

var nVolantes = [];
var nMeioCampo = [];

function sorteioMeioCampo() {
  var caixaDeVolanteP1 = document.getElementById("volante100");
  var caixaDeVolanteP2 = document.getElementById("volante200");
  var caixaDeVolanteP3 = document.getElementById("volante300");

  var caixaDeMeioCampoP1 = document.getElementById("meioCampo100");
  var caixaDeMeioCampoP11 = document.getElementById("meioCampo101");
  var caixaDeMeioCampoP111 = document.getElementById("meioCampo102");

  var caixaDeMeioCampoP2 = document.getElementById("meioCampo200");
  var caixaDeMeioCampoP22 = document.getElementById("meioCampo201");
  var caixaDeMeioCampoP222 = document.getElementById("meioCampo202");

  var caixaDeMeioCampoP3 = document.getElementById("meioCampo300");
  var caixaDeMeioCampoP33 = document.getElementById("meioCampo301");
  var caixaDeMeioCampoP333 = document.getElementById("meioCampo302");

  while (nVolantes.length < 3) {
    var sorteioVolante = Math.floor(Math.random() * volantes.length);

    if (nVolantes.indexOf(sorteioVolante) == -1) {
      nVolantes.push(sorteioVolante);
    }
  }

  while (nMeioCampo.length < 9) {
    var sorteioMC = Math.floor(Math.random() * meioCampo.length);

    if (nMeioCampo.indexOf(sorteioMC) == -1) {
      nMeioCampo.push(sorteioMC);
    }
  }

  caixaDeVolanteP1.innerHTML = volantes[nVolantes[0]]["nome"];
  caixaDeVolanteP2.innerHTML = volantes[nVolantes[1]]["nome"];
  caixaDeVolanteP3.innerHTML = volantes[nVolantes[2]]["nome"];

  caixaDeMeioCampoP1.innerHTML = meioCampo[nMeioCampo[0]]["nome"];
  caixaDeMeioCampoP11.innerHTML = meioCampo[nMeioCampo[1]]["nome"];
  caixaDeMeioCampoP111.innerHTML = meioCampo[nMeioCampo[2]]["nome"];

  caixaDeMeioCampoP2.innerHTML = meioCampo[nMeioCampo[3]]["nome"];
  caixaDeMeioCampoP22.innerHTML = meioCampo[nMeioCampo[4]]["nome"];
  caixaDeMeioCampoP222.innerHTML = meioCampo[nMeioCampo[5]]["nome"];

  caixaDeMeioCampoP3.innerHTML = meioCampo[nMeioCampo[6]]["nome"];
  caixaDeMeioCampoP33.innerHTML = meioCampo[nMeioCampo[7]]["nome"];
  caixaDeMeioCampoP333.innerHTML = meioCampo[nMeioCampo[8]]["nome"];
}

document
  .getElementById("sortearMeioCampoP3")
  .addEventListener("click", sorteioMeioCampo);

//   \\\\\\\\\\\\\\\\MEIO CAMPO\\\\\\\\\\\\\\\\\

var nPD = [];
var nPE = [];
var nCA = [];

function sorteioAtaque(){
    var caixaDePD1 = document.getElementById("pontaDireita100");
    var caixaDePD2 = document.getElementById("pontaDireita200");
    var caixaDePD3 = document.getElementById("pontaDireita300");

    var caixaDePE1 = document.getElementById("pontaEsquerda100");
    var caixaDePE11 = document.getElementById("pontaEsquerda101");

    var caixaDePE2 = document.getElementById("pontaEsquerda200");
    var caixaDePE22 = document.getElementById("pontaEsquerda201");

    var caixaDePE3 = document.getElementById("pontaEsquerda300");
    var caixaDePE33 = document.getElementById("pontaEsquerda301");

    var caixaDeCA1 = document.getElementById("centroavante100");
    var caixaDeCA11 = document.getElementById("centroavante101");

    var caixaDeCA2 = document.getElementById("centroavante200");
    var caixaDeCA22 = document.getElementById("centroavante201");

    var caixaDeCA3 = document.getElementById("centroavante300");
    var caixaDeCA33 = document.getElementById("centroavante301");

    while(nPD.length < 3){
        var sPD = Math.floor(Math.random() * pontasD.length);

        if(nPD.indexOf(sPD) == -1){
            nPD.push(sPD);
        }
    }

    while(nPE.length < 6){
        var sPE = Math.floor(Math.random() * pontasE.length);

        if(nPE.indexOf(sPE) == -1){
            nPE.push(sPE);
        }
    }

    while(nCA.length < 6){
        var sCA = Math.floor(Math.random() * centroavantes.length);

        if(nCA.indexOf(sCA) == -1){
            nCA.push(sCA);
        }
    }

caixaDePD1.innerHTML = pontasD[nPD[0]]["nome"];
caixaDePD2.innerHTML = pontasD[nPD[1]]["nome"];
caixaDePD3.innerHTML = pontasD[nPD[2]]["nome"];

caixaDePE1.innerHTML = pontasE[nPE[0]]["nome"];
caixaDePE11.innerHTML = pontasE[nPE[1]]["nome"];

caixaDePE2.innerHTML = pontasE[nPE[2]]["nome"];
caixaDePE22.innerHTML = pontasE[nPE[3]]["nome"];

caixaDePE3.innerHTML = pontasE[nPE[4]]["nome"];
caixaDePE33.innerHTML = pontasE[nPE[5]]["nome"];

caixaDeCA1.innerHTML = centroavantes[nCA[0]]["nome"];
caixaDeCA11.innerHTML = centroavantes[nCA[1]]["nome"];

caixaDeCA2.innerHTML = centroavantes[nCA[2]]["nome"];
caixaDeCA22.innerHTML = centroavantes[nCA[3]]["nome"];

caixaDeCA3.innerHTML = centroavantes[nCA[4]]["nome"];
caixaDeCA33.innerHTML = centroavantes[nCA[5]]["nome"];


}

document
  .getElementById("sortearAtaqueP3")
  .addEventListener("click", sorteioAtaque);


  var nJogadores = [];
  var numS = [];

  function sortearPlayer() {



    var btn1 = document.getElementById("btn1").value;
    var btn2 = document.getElementById("btn2").value;
    var btn3 = document.getElementById("btn3").value;

    var cx1 = document.getElementById("jo1");
    var cx2 = document.getElementById("jo2");
    var cx3 = document.getElementById("jo3");

    nJogadores.push(btn1);
    nJogadores.push(btn2);
    nJogadores.push(btn3);

    

  while(numS.length < 3){
    var sortearJ = Math.floor(Math.random() * nJogadores.length);

    if(numS.indexOf(sortearJ) == -1){
      numS.push(sortearJ);
    }

  }

cx1.innerHTML = nJogadores[numS[0]];
cx2.innerHTML = nJogadores[numS[1]];
cx3.innerHTML = nJogadores[numS[2]];

  }

  document.getElementById("btnsortear").addEventListener("click", sortearPlayer);