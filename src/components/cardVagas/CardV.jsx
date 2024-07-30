import React from "react";
import './style.css'
const CardVagas=({vagaData})=>{
    return(

        <>
{
    <div className="cardv" >
        <h3>{vagaData.titulo}</h3>
        <p className="emName">{vagaData.empresa}</p>
        <p>{vagaData.desc}</p>
        <p> Salario: {vagaData.salario}R$</p>
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
        <button>Candidatar-se</button>
    </div>
} 
        </>
    )
}

export default CardVagas