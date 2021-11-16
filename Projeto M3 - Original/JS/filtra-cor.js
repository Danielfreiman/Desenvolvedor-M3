var filtraAmarelo = document.querySelector("#checkbox-amarelo");
var filtraAzul = document.querySelector("#checkbox-azul");
var filtraBranco = document.querySelector("#checkbox-branco");
var filtraCinza = document.querySelector("#checkbox-cinza");
var filtraLaranja = document.querySelector("#checkbox-laranja");
var filtraPreto = document.querySelector("#checkbox-preto");
var filtraRosa = document.querySelector("#checkbox-rosa");
var limparfiltro  =document.querySelector("#limpaFiltro")

var produtosFiltrados = produtos


function filtraCores(filtro, cores){
	filtro.addEventListener("click", function(){
	produtosFiltrados = produtos.filter(p => p.cor === cores) 
	var containerProduto = document.getElementById("produtos")
		containerProduto.innerHTML = "";
		produtosFiltrados.map((val)=>{
			containerProduto.innerHTML+=`
				<div class="grade__produto">
				<img src="`+val.imgProduto+`"  />
				<p class="descricao__produtos___nome">`+val.descricao+`</p>
				<p class="descricao__produtos___preco" >`+"R$"+val.preco+`</p>
				<p class="descricao__produtos___parcelamento">`+val.parcelamento+`</p>
				<button key="`+val.id+`" href="#" class="botao__comprar">Comprar</button>

				</div>
			`;
		})
	})

	
}
limparfiltro.addEventListener("click", carregaProduto);



filtraCores(filtraAmarelo, "amarelo");
filtraCores(filtraAzul, "azul");
filtraCores(filtraBranco, "branco");
filtraCores(filtraCinza, "cinza");
filtraCores(filtraLaranja, "laranja");
filtraCores(filtraPreto, "preto");
filtraCores(filtraRosa, "rosa");

