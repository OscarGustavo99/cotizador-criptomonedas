import { useEffect, useState } from 'react'
import { Formulario, Resultado } from './components'
import ImagenCripto from './img/imagen-criptos.png'
import styled from '@emotion/styled'
import axios from 'axios'

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`

const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`

const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #FFF;
    text-align:center;
    font-weight:900;
    margin-top: 50px;
    margin-bottom: 30px;
    font-size:34px;

    &::after{
      content:'';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display: block;
      margin: 10px auto 0 auto;
    }
`

export const App = () => {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  
  // Consume API
  const cotizarCripto = async () => {

    const { moneda, criptoMoneda } = monedas
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
    await axios.get(url)
      .then(({data})=>{
        setCotizacion(data.DISPLAY[criptoMoneda][moneda])
      })

  }


  useEffect(() => {
    (Object.keys(monedas).length > 0) &&
      (() => {
        cotizarCripto()
      })()
  // eslint-disable-next-line
  }, [monedas])


  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="imagenes criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        
        <Formulario
          setMonedas={setMonedas}
        />
        { cotizacion?.PRICE && <Resultado cotizacion={cotizacion}/> }

      </div>

    </Contenedor>
  )
}



