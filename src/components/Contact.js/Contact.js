import { useEffect } from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Input from './Input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    const showToastMessage = () => {
        toast.success('Sent Successfully 😉', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <Container maxWidth='lg' >
            <ToastContainer />
            <Grid container alignItems='center' my={15} spacing={2}>
                <Grid item xs={12} sm={6} lg={5} data-aos='fade-right'>
                    <Image
                        src={'/images/contact.png'}
                        width={445}
                        height={500}
                        alt='gray and white home'
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={5} data-aos='fade-right'>
                    <Typography
                        variant='h3'
                        color='textPrimary'
                        sx={{
                            fontSize: {
                                xs: 'h4.fontSize',
                                md: 'h3.fontSize',
                            },
                            fontWeight: '700',
                        }}
                    >
                        Contact US
                    </Typography>
                    <Typography variant='body1' color='#BDBDBD' mt={1} mb={3}>
                        Turpis facilisis tempor pulvinar in lobortis ornare magna.
                    </Typography>
                    <Input  showToastMessage={showToastMessage}/>
                </Grid>
            </Grid>
        </Container>
    )
}