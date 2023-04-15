import { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';

import { categoria } from '../data/monedas'
import { useSelectMonedas } from '../hooks';
import axios from 'axios';

const StyledButton = styled(Button)({
  backgroundColor: '#9497FF',
  border: 'none',
  width: '100%',
  padding: '10px',
  color: '#FFF',
  fontWeight: '700',
  textTransform: 'uppercase',
  fontSize: '20px',
  borderRadius: '15px',
  transition: 'background-color .5s ease',

  '&:hover': {
    backgroundColor: '#7A7DFE',
  },
});

export const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([]);
  const [validacion, setValidacion] = useState(false);

  // CUSTOM HOOK
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', categoria);
  const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);


  // Consume API
  const consultarAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    await axios.get(url)
      .then(({ data }) => {

        const arrayCriptos = data.Data.map(cripto => ({
          id: cripto?.CoinInfo?.Name,
          nombre: cripto?.CoinInfo?.FullName
        }));

        setCriptos(arrayCriptos)

      })
      .catch(error => {
        console.log(error)
      })

  }

  useEffect(() => {
    consultarAPI()
  }, [])

  useEffect(() => {
    setValidacion((moneda === '' || criptoMoneda === '') ? false : true)
  }, [moneda, criptoMoneda])

  const handleSubmit = (e) => {
    e.preventDefault();

    setMonedas({
      moneda,
      criptoMoneda
    })
  }


  return (

    <form>
      <SelectMonedas />

      <SelectCriptoMoneda />

      <StyledButton sx={{ marginTop: '20px', marginBottom: '50px' }}
        variant="contained"
        onClick={handleSubmit}
        disabled={!validacion}
      >
        Cotizar
      </StyledButton>
    </form>

  )
}
