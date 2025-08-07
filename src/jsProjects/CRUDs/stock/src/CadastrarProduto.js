function CadastrarProduto(){
    console.log('==== Cadastrar Produto ====\n')
    
    rl.question('\nDigite o nome do produto:\n', (Nome) => {
            rl.question('\nDigite a quantidade:\n', (Quantidade) => {
                if(isNaN(Quantidade) || Quantidade < 0){console.log('Digite um numero...') 
                    CadastrarProduto()}
                        rl.question('\nDigite o Preço:\n', (Preco) =>{
                            if(isNaN(Preco) || Preco < 0){console.log('Digite um numero...') 
                                CadastrarProduto()}
                            estoque.push({
                                Nome,
                                Quantidade,
                                Preco
                            });
    console.log("Cadastrado com sucesso!")
            rl.question("Deseja Cadastrar um novo produto? (s/n)", (input5)=>{
                if (input5.toLowerCase() === 's'){ CadastrarProduto()} else {MenuPrincipal()}})
                })
            })
        })
    }