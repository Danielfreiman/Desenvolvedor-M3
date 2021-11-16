var filtraP = document.querySelector("#botao-p");
var filtraM = document.querySelector("#botao-m");
var filtraG = document.querySelector("#botao-g");
var filtraGG = document.querySelector("#botao-gg");
var filtraU = document.querySelector("#botao-u");
var filtra36 = document.querySelector("#botao-36");
var filtra38 = document.querySelector("#botao-38");
var filtra40 = document.querySelector("#botao-40");
var filtra42 = document.querySelector("#botao-42");
var filtra44 = document.querySelector("#botao-44");
var filtra46 = document.querySelector("#botao-46");

function filtraTamanho(filtro, tamanho){
	filtro.addEventListener("click", function(){
	produtosFiltrados = produtos.filter(p => p.tamanho === tamanho) 
	var containerProduto = document.getElementById("produtos")
		containerProduto.innerHTML = "";
		produtosFiltrados.map((val)=>{
			containerProduto.innerHTML+=`
				<div class="grade__produto">
				<img src="`+val.imgProduto+`"  />
				<p class="descricao__produtos___nome">`+val.descricao+`</p>
				<p class="descricao__produtos___preco" >`+val.preco+`</p>
				<p class="descricao__produtos___parcelamento">`+"R$"+val.parcelamento+`</p>
				<button key="`+val.id+`" href="#" class="botao__comprar">Comprar</button>

				</div>
			`;
		})})
	
}

filtraTamanho(filtraP, "p");
filtraTamanho(filtraM, "m");
filtraTamanho(filtraG, "g");
filtraTamanho(filtraGG, "gg");
filtraTamanho(filtraU, "u");
filtraTamanho(filtra36, "36");
filtraTamanho(filtra38, "38");
filtraTamanho(filtra40, "40");
filtraTamanho(filtra42, "42");
filtraTamanho(filtra44, "44");
filtraTamanho(filtra46, "46");

