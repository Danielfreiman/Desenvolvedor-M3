function maisCores(){
	var pontos = document.getElementById("pontos")
	var maisCores = document.getElementById("mais")
	var botao = document.getElementById("btMaisCores")


	if (pontos.style.display === "none") {
		pontos.style.display="inline";
		maisCores.style.display="none";
		botao.innerHTML="Ver todas as cores" ;	
	} else {
		pontos.style.display="none";
		maisCores.style.display="inline";
		botao.innerHTML="Ver menos cores" ;
	}
}