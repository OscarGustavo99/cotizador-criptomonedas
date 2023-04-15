import { useEffect, useState } from 'react'
import { Box, CardContent, CardHeader, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { MyCard } from '../helpers/coloresPersonalizados'

export const Resultado = ({ cotizacion }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    
    useEffect(() => {
        setIsImageLoaded(false)
        IMAGEURL !== null &&
        setTimeout(() => setIsImageLoaded(true), 500)
    }, [IMAGEURL])

    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center">

                <MyCard
                    variant="outlined" sx={{ width: 600, background: '#111927', color: '#e3f2fd' }}>
                    <CardHeader
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />

                    <CardContent sx={{ p: 0 }}>
                        <Stack
                            alignItems="flex-start"
                            direction="row"
                            flexWrap="wrap"
                            spacing={3}
                            sx={{ p: 0 }}
                        >
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    height: 200,
                                    justifyContent: 'center',
                                    width: 225
                                }}
                            >
                                {/* //TODO: CONDICION  */}
                                {isImageLoaded ?
                                    <img src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen-Cripto' />
                                    :
                                    <CircularProgress color='inherit' size={75} />
                                }
                            </Box>

                            <Stack
                                spacing={1}
                                sx={{ flexGrow: 1, p: 0 }}
                            >
                                <Stack sx={{ p: 0 }}>
                                    <Stack
                                        component="ul"
                                        spacing={1}
                                        sx={{ listStyle: 'none', m: 0, p: 0, marginTop: 1 }}
                                    >
                                        <Stack
                                            alignItems="center"
                                            component="li"
                                            direction="row"
                                            spacing={1}
                                        >

                                            <Typography
                                                fontSize='26px'
                                                sx={{ flexGrow: 1 }}
                                                variant="subtitle2"
                                            >
                                                El precio es de: {PRICE}
                                            </Typography>

                                        </Stack>

                                        <Stack
                                            alignItems="center"
                                            component="li"
                                            direction="row"
                                            spacing={1}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: '#6366F1',
                                                    borderRadius: '4px',
                                                    height: 16,
                                                    width: 16
                                                }}
                                            />
                                            <Typography
                                                fontSize='1rem'
                                                sx={{ flexGrow: 1 }}
                                                variant="subtitle2"
                                            >
                                                Precio más alto del día:{' '}
                                                <Box sx={{ fontSize: '20px' }} component="span" display="inline">
                                                    {HIGHDAY}
                                                </Box>
                                            </Typography>

                                        </Stack>

                                        <Stack
                                            alignItems="center"
                                            component="li"
                                            direction="row"
                                            spacing={1}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: '#6366F1',
                                                    borderRadius: '4px',
                                                    height: 16,
                                                    width: 16
                                                }}
                                            />
                                            <Typography
                                                fontSize='1rem'
                                                sx={{ flexGrow: 1 }}
                                                variant="subtitle2"
                                            >
                                                Precio más bajo del día:{' '}
                                                <Box sx={{ fontSize: '20px' }} component="span" display="inline">
                                                    {LOWDAY}
                                                </Box>
                                            </Typography>

                                        </Stack>

                                        <Stack
                                            alignItems="center"
                                            component="li"
                                            direction="row"
                                            spacing={1}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: '#6366F1',
                                                    borderRadius: '4px',
                                                    height: 16,
                                                    width: 16
                                                }}
                                            />
                                            <Typography
                                                fontSize='1rem'
                                                sx={{ flexGrow: 1 }}
                                                variant="subtitle2"
                                            >
                                                Variación últimas 24 horas:{' '}
                                                <Box sx={{ fontSize: '20px' }} component="span" display="inline">
                                                    {CHANGEPCT24HOUR}

                                                </Box>
                                            </Typography>

                                        </Stack>
                                        <Stack
                                            alignItems="center"
                                            component="li"
                                            direction="row"
                                            spacing={1}
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: '#6366F1',
                                                    borderRadius: '4px',
                                                    height: 16,
                                                    width: 16
                                                }}
                                            />
                                            <Typography
                                                fontSize='1rem'
                                                sx={{ flexGrow: 1 }}
                                                variant="subtitle2"
                                            >
                                                Ultima Actualización:{' '}
                                                <Box sx={{ fontSize: '20px' }} component="span" display="inline">
                                                    {LASTUPDATE}
                                                </Box>
                                            </Typography>

                                        </Stack>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>

                    </CardContent>

                </MyCard>
            </Grid>
        </div>
    )
}
