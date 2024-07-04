let produtos = [ ]
function cadastrarProduto(){
    let produto = {
    nome:prompt('digite o neme do produto:'),
    preco:Number(prompt('preco:'))
 }

 produtos.push(produto)
 console.log(produtos);
}