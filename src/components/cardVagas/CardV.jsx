import React, { useState } from "react";
import './style.css'
import CandForm from "../Modals/CadidatoForm/CandForm";
const CardVagas=({vagaData})=>{

    const [modalOpen,modalIsOpen]= useState(false)
    return(

        <>

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
        <button onClick={()=>{
            return modalIsOpen(!modalOpen)
        }}>Candidatar-se</button>
    </div>
<CandForm  isOpen={modalOpen} setIsOpen={modalIsOpen} vagaDesc={vagaData}  />


        </>
    )
}

export default CardVagas