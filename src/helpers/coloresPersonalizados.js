import {Card, createTheme } from '@mui/material';
import styled from 'styled-components';


export const formatearCantidad = (cantidad) =>{
  return cantidad.toLocaleString('en-US',{
    style: 'currency',
    currency:'USD'
  })
}

export const theme = createTheme({
  typography: {
    fontFamily: "'Barlow Condensed', sans-serif",
  },
});

export const MyCard = styled(Card)({
  borderRadius: '20px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

