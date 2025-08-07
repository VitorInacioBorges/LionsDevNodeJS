function VerificarEstoque(){
    let baixoEstoque = 0;
    console.log('Os seguintes produtos possuem quantidade baixa (menor que 5):');
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].Quantidade < 5){
            console.log(`Nome: ${estoque[i].Nome}, Quantidade: ${estoque[i].Quantidade}`);
            baixoEstoque++;
        }
    }
    console.log(`No total temos ${baixoEstoque} produtos com quantidade baixa!\n Aperte ENTER para voltar ao menu...`);
    rl.question('', MenuPrincipal);

}