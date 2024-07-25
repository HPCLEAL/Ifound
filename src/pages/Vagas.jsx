import React from "react";
import Header from "../components/myHeader/Header";
import CardVagas from "../components/cardVagas/CardV";
import { dados } from "../dados";
const data=dados.vagas
const FeedVagas=()=>{
    return(
        <>
        <Header/>
        <div className="vagasGrid">
{data.map( vaga=>(
    <>
    <CardVagas key={vaga.id} vagaData={vaga}/>
    </>
))}
        </div>
        </>
    )
}
export default FeedVagas