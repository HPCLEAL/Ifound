import React from "react";

const CardVagas=({vagaData})=>{
    return(

        <>
{
    <div className="cardv" >
        <h3>{vagaData.titulo}</h3>
        <p>{vagaData.empresa}</p>
        <p>{vagaData.desc}</p>
        <p>{vagaData.salario}R$</p>
        <div className="benefDiv">
            {vagaData.beneficios.map( itens=>(
                <>
                <div className="benef">
                    <p>{itens.nome}</p>
                   { itens.valor ? <p>{itens.valor}R$</p>: null}
                </div>
                </>
            ))}
        </div>
    </div>
}
        </>
    )
}

export default CardVagas