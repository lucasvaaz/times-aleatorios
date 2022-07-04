
var numGoleiro = [];

function sortearGoleiros() {
  var caixaGoleiros = document.getElementById("goleiro");

  while(numGoleiro.length < 1){
    var sortearGoleiro = Math.floor(Math.random() * goleiros.length);

    if(numGoleiro.indexOf(sortearGoleiro) == -1){
      numGoleiro.push(sortearGoleiro)
  }

  
  caixaGoleiros.innerHTML = goleiros[numGoleiro[0]]["nome"];
}
}


document
  .getElementById("sortearGoleiro")
  .addEventListener("click", sortearGoleiros);

// \\\\\\\\\\\\\\\\\\\\\\\\\ZAGA E LATERAIS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  var numZagueiros = [];

function sortearZagueiros() {
  var caixaZagueiros = document.getElementById("zagueiro1");
  var caixaZagueiros2 = document.getElementById("zagueiro2");
  var caixaLateralD = document.getElementById("lateralDireito");
  var caixaLateralE = document.getElementById("lateralEsquerdo");


while(numZagueiros.length < 2){
  var sortearZagueiro = Math.floor(Math.random() * zagueiros.length);
  var sortearLateralD = Math.floor(Math.random() * lateraisD.length);
  var sortearLateralE = Math.floor(Math.random() * lateraisE.length);

  if(numZagueiros.indexOf(sortearZagueiro) == -1){
    numZagueiros.push(sortearZagueiro)
  }
}

  caixaZagueiros.innerHTML = zagueiros[numZagueiros[0]]["nome"];
  caixaZagueiros2.innerHTML = zagueiros[numZagueiros[1]]["nome"];
  caixaLateralD.innerHTML = lateraisD[sortearLateralD]["nome"];
  caixaLateralE.innerHTML = lateraisE[sortearLateralE]["nome"];
}

document
  .getElementById("sortearZagueiro")
  .addEventListener("click", sortearZagueiros);

// \\\\\\\\\\\\\\\\\\\\\\\\\MEIO CAMPO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


var numMeioCampo = [];

function sortearMeioCampo() {
  var caixaVolante = document.getElementById("volante");
  var caixaMeioCampo1 = document.getElementById("meioCampo2");
  var caixaMeioCampo2 = document.getElementById("meioCampo3");
  var caixaMeioCampo3 = document.getElementById("meioCampo4");

  while (numMeioCampo.length < 3) {
    var sortearM = Math.floor(Math.random() * meioCampo.length);
    var sortearVolante = Math.floor(Math.random() * volantes.length);

    if (numMeioCampo.indexOf(sortearM) == -1) {
      numMeioCampo.push(sortearM);
    }
  }

  caixaVolante.innerHTML = volantes[sortearVolante]["nome"];
  caixaMeioCampo1.innerHTML = meioCampo[numMeioCampo[0]]["nome"];
  caixaMeioCampo2.innerHTML = meioCampo[numMeioCampo[1]]["nome"];
  caixaMeioCampo3.innerHTML = meioCampo[numMeioCampo[2]]["nome"];
}

document
  .getElementById("sortearMeioCampo")
  .addEventListener("click", sortearMeioCampo);


  // \\\\\\\\\\\\\\\\\\\\\\\\\ATAQUE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  var numCentroavante = [];
  var numPontaEsquerda = []; 

  function sortearCentroavante() {
    var caixaCentroavante = document.getElementById("centroavante");
    var caixaCentroavante2 = document.getElementById("centroavante2");
    var caixaPontaEsquerda = document.getElementById("pontaEsquerda");
    var caixaPontaEsquerda2 = document.getElementById("pontaEsquerda2");
    var caixaPontaDireita = document.getElementById("pontaDireita");

    

    while(numCentroavante.length < 2 && numPontaEsquerda.length < 2 ){
      var sortearCA = Math.floor(Math.random() * centroavantes.length);
      var sortearPE = Math.floor(Math.random() * pontasE.length);
      var sortearPD = Math.floor(Math.random() * pontasD.length);
      

      if(numCentroavante.indexOf(sortearCA) == -1){
        numCentroavante.push(sortearCA);
      }

      if(numPontaEsquerda.indexOf(sortearPE) == -1){
        numPontaEsquerda.push(sortearPE);
      }
    }
    

caixaCentroavante.innerHTML = centroavantes[numCentroavante[0]]["nome"];
caixaCentroavante2.innerHTML = centroavantes[numCentroavante[1]]["nome"];
caixaPontaEsquerda.innerHTML = pontasE[numPontaEsquerda[0]]["nome"];
caixaPontaEsquerda2.innerHTML = pontasE[numPontaEsquerda[1]]["nome"];
caixaPontaEsquerda2.innerHTML = pontasE[numPontaEsquerda[1]]["nome"];
caixaPontaDireita.innerHTML = pontasD[sortearPD]["nome"];

  }

  document
  .getElementById("sortearAtaque")
  .addEventListener("click", sortearCentroavante);


  