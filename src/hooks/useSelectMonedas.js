import { useState } from 'react'
import { Box, MenuItem, Select, Typography } from '@mui/material'

// REUTILIZANDO FUNCION MEDIANTE CUSTOM HOOKS
export const useSelectMonedas = (label, categoria) => {

    const [state, setState] = useState('')

    const handleFilterChangeExpense = ({ target }) => {
        setState(target.value)
    };

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
            },
        },
    };

    const SelectMonedas = () => (
        <>
            <Box padding={2}>
                <Typography color='white' variant='h5'>
                    {label}
                </Typography>

                <Select
                    value={state}
                    onChange={handleFilterChangeExpense}
                    size='small'
                    sx={{ fontSize: '18px', backgroundColor: 'white' }}
                    MenuProps={MenuProps}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value="">
                        <em>-Selecione-</em>
                    </MenuItem>

                    {categoria.map((data) => (
                        <MenuItem
                            sx={{ fontSize: '18px' }}
                            key={data?.id}
                            value={data?.id}
                        >
                            {data?.nombre}
                        </MenuItem>
                    ))}
                </Select>
            </Box>

        </>
    )

    return [state, SelectMonedas]

}
