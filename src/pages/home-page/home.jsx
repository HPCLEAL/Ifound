import React from "react";
import Header from "../../components/myHeader/Header";
import { Link } from "react-router-dom";
const HomePage=()=>{

   return (
    <>
    <Header/>
    <main>
<div className="title">
   <h1>Ifound</h1>
   <h2>Ache seu proximo emprego  ou publique uma oportunidade na nossa plataforma</h2>
 <p>Ifound é uma plataforma gratuita onde você consegue publicar e achar vagas em qualquer lugar do mundo de forma simples e segura</p>
</div>
<article>
   <p className="atitle">
      Procurando um emprego ?
   </p>
  <button>
  <p>Crie uma conta como empregado e comece a se candidatar para vagas</p>
  </button>
   <Link> Criar conta como empregado</Link>
</article>
<article>
   <p className="atitle">
      Tem uma oportunidade de emprego para alguém?
   </p>
  <button>
  <p>Crie uma conta como empregador e publique sua oportunidade de emprego</p>
  </button>
   <Link> Criar conta como empregador</Link>
</article>
    </main>
    </>
   )
}
export default HomePage