function MenuPrincipal(){
    console.log(`
    ====== Estoque ======
    1. Cadastrar produtos
    2. Listar Produtos
    3. Atualizar Estoque
    4. Remover Produtos
    5. Verificar Estoque Minimo
    6. Valor Total do Estoque
    7. Buscar Produto
    8. Adicionar Categoria e Filtrar Por Ela
    9. Sair
`)

rl.question('\n Escolha uma opção acima:\n', (input1)=>{
    let menu = parseInt(input1)
switch (menu){
    case 1:
        CadastrarProduto();
        break;
    case 2:
        ListarProduto();
        break;
    case 3: 
        AtualizarEstoque();
        break;
    case 4:
        Remover();
        break;
    case 5:
        VerificarEstoque();
        break;
    case 6:
        ValorTotalEstoque();
        break;
    case 7:
        BuscarProduto();
        break;
    default:
        console.log("Digite um número Valido...");
        MenuPrincipal();
        break;
        }
    })
    
}

module.exports = MenuPrincipal;