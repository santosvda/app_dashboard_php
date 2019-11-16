$(document).ready(() => {
	
	$('#documentacao').on('click', () => {
		//sobrepoe o conteudo do id pelo contido no arquivo
		//$('#pagina').load('documentacao.html');

		//metodo get espera a url(depois de realizar o metodo recebe como parametro o response text) 
		//e a ação
		/*
		$.get('documentacao.html', data => {
			$('#pagina').html(data);
		})
		*/
		$.post('documentacao.html', data => {
			$('#pagina').html(data)
		})
	})

	$('#suporte').on('click', () => {
		//$('#pagina').load('suporte.html');

		/*
		$.get('suporte.html', data => {
			$('#pagina').html(data);
		})
		*/
		$.post('suporte.html', data => {
			$('#pagina').html(data)
		})
	})

	//ajax
	$('#competencia').on('change', (e) => {

		let competencia = $(e.target).val();
		console.log(competencia);

		//informações basicos para uma requisição http e naturalmente utilizando ajax
		//método, url, dados, se sucesso, se erro
		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`, //x-www-form-urlencoded - formar que o browser utiliza para recuperar formularios e colocar os dados(name/value) em uma url
			//por padrão o ajax recebe um HTML/text como retorno um obj mudo o retorno com dataType
			dataType: 'json',
			success: (dados) => {
				console.log(dados);
				console.log(dados.numeroVendas, dados.totalVendas);
				$('#numeroVendas').html(dados.numeroVendas);
				$('#totalVendas').html('R$ '+dados.totalVendas);
				$('#clientesAtivos').html(dados.clientesAtivos);
				$('#clientesInativos').html(dados.clientesInativos);
				$('#reclamacoes').html(dados.reclamacoes);
				$('#elogios').html(dados.elogios);
				$('#sugestoes').html(dados.sugestoes);
				$('#totalDespesas').html('R$ '+dados.totalDespesas);
			},
			error: (erro) => {console.log(erro)}
		})

		
	})
})

