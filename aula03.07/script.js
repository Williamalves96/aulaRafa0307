     
//   let produto =
//     {
//      nome:'bala' , 
//      preco: 1 
//     }

// // console.log(produto);
// // console.log(produto.preco);


// // produto.preco =  3 

// // console.log(produto);
// // produto.preco = 2 

// // console.log(produto);

// // produto.nome = 'bala normal '
// // produto.preco = 15
// // console.log(produto);

// let produtos = []

//  produtos.push(produto)

//  produto = {
//      nome:'chicle',
//      preco:0.25
// }
// produtos.push(produto)
// console.log(produtos);


// for(i=0;i<produtos.length;i++){
    
//     console.log('produto:' + produtos[i].nome )
//     console.log('R$:' + produtos[i].preco )

// }


let nome = document.getElementById('name')
let descricao = document.getElementById('description')
let preco = document.getElementById('price')

let produtos = [] 
 
function cadastrar() {

    let produto = {
        nome: nome.value,
        descricao:description.value,
        preco:preco.value
    }

    if (nome.value != " " && description.value != "" && preco.value != ""){

        produtos.push(produto)
    console.log(produtos)

    }
    
}

function searchProduct(){
    let pesquisa = nome.value
    for( i=0; i<produtos.length; i++){

        console.log(produtos[i].nome )
}
    }

    
