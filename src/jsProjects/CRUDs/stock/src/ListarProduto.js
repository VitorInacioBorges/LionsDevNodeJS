function ListarProduto() {
    if(estoque.length === 0){
        console.log('nenhum item cadastrado! \nprecione enter para voltar')
        return rl.question('', MenuPrincipal)
    }else{
        console.log('estoque: ')
        estoque.forEach((produto, index) => {
            console.log(`${index + 1}. \nNome: ${estoque[index].Nome} \nQuantidade: ${estoque[index].Quantidade} \nPreço: ${estoque[index].Preco}\n`)
        })
    }
    console.log('precione enter para voltar')
    return rl.question('', MenuPrincipal)
}