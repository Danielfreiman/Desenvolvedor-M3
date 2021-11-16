var sacola = document.getElementsByClassName("bag")


function adicionaCarrinho(){
	var containerCarrinho = document.getElementById('carrinho');
	containerCarrinho.innerHTML = "";
	sacola.innerHTML = "null";
	produtos.map((val)=>{
	var itensCarrinho = produtos.reduce((acc, p) => acc + p.quantidade, 0);

		if (val.quantidade > 0){
			containerCarrinho.innerHTML+=`
				<p class="carrinho-estilo"> `+itensCarrinho+`<img class="imagem-sacola" src="IMG/bagNumber.png"  /></p>
			`;
		}
	})

}

var links = document.getElementsByClassName("botao__comprar")


for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function(){
		let key = this.getAttribute('key');
		produtos[key].quantidade++;
		adicionaCarrinho();
		return false;
	})
}

