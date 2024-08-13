
import ReCAPTCHA from "react-google-recaptcha"
import './style.css'
const CandForm=({isOpen,setIsOpen,vagaDesc})=>{

console.log(isOpen)
    if(isOpen){
return( 
        <>
        
        <div className="overlay"></div>
        <div className="modalCandiDiv">
        <form action="">
            <p>{vagaDesc.titulo}</p>
            <p>{vagaDesc.empresa}</p>

<label htmlFor="email">Seu email</label>
<input type="email" />
<label htmlFor="candPhone">Telefone</label>
<input type="text" /> 
<input type="file" max-size='2000' aceppt='.pdf' />
<ReCAPTCHA sitekey="http://localhost:5173/vagas"/>
        </form>
        <button id="close-btn" onClick={()=>{
           return setIsOpen(!isOpen)
        }}>X</button>
        <button id="cad-btn" >Enviar</button>
        </div>
        </>)
    }
    return null
}

export default CandForm