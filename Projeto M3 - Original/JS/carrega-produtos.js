
function carregaProduto(){var containerProduto = document.getElementById("produtos")
		containerProduto.innerHTML = "";
		produtos.map((val)=>{
			containerProduto.innerHTML+=`
				<div class="grade__produto">
				<img src="`+val.imgProduto+`"  />
				<p class="descricao__produtos___nome">`+val.descricao+`</p>
				<p class="descricao__produtos___preco" >`+"R$"+val.preco+`</p>
				<p class="descricao__produtos___parcelamento">`+val.parcelamento+`</p>
				<button key="`+val.id+`" href="#" class="botao__comprar">Comprar</button>

				</div>
			`;
		})}


carregaProduto();