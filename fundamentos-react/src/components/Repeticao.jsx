import React from 'react'
import produto from '../data/produto' 

export default props =>
{
    function getProduto(){
        return produto.map(prod => {
            return <li key={prod.id}  > {prod.id} - {prod.nome} - {prod.preco}</li> 
        });
    }
    return (
        <>
            <h2>Repetição</h2>
            <ul>
               {getProduto()}
            </ul>
        </>
    )

}