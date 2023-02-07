import { useState } from "react"

const ItemCount = ({valInicial,stock}) => {
  

      //Var    , forma mod var   estado inicial
const [contador,setContador]=useState(valInicial)
const AumentarContador = () => setContador(contador+1)
const DisminuirContador = () => setContador(contador-1)

  return (
    <>
        <button className="btn btn-dark" onClick={()=> (contador < stock) && AumentarContador()}> + </button>
        {contador}
        <button className="btn btn-dark" onClick={()=> (contador > valInicial) && DisminuirContador()}> - </button>
    </>
  );
}

export default ItemCount;
