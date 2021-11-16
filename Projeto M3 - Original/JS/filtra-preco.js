var filtra0a50 = document.querySelector("#faixa-preco1");
var filtra51a150 = document.querySelector("#faixa-preco2");
var filtra151a300 = document.querySelector("#faixa-preco3");
var filtra301a500 = document.querySelector("#faixa-preco4");
var filtra1a = document.querySelector("#faixa-preco5");

function filtraCores(filtro, preco1, preco2){
	filtro.addEventListener("click", function(){
	produtosFiltrados = produtos.filter(p => p.preco >= preco1 && p.preco <= preco2) 
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
		})})
	
}

filtraCores(filtra0a50, 0, 50)
filtraCores(filtra51a150, 51, 150)
filtraCores(filtra151a300, 151, 300)
filtraCores(filtra301a500, 301, 500)
filtraCores(filtra1a, 0, 1000000)