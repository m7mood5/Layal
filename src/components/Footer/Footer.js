import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import RoomIcon from '@mui/icons-material/Room'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import CustomLink from './CustomLinks'

export default function Footer() {
    return (
        <Box component='footer' sx={{ backgroundColor: '#1E3240' }}>
            <Container maxWidth='lg'>
                <Grid container spacing={2} sx={{ pt: 10, pb: 12 }}>
                    <Grid item sm={6}>
                        <Typography variant='body1' fontWeight='700' color='white'>
                            LAYAL
                        </Typography>
                        <Typography
                            variant='body2'
                            color='#BDBDBD'
                            sx={{
                                alignItems: 'top',
                                display: 'flex',
                            }}
                            my={1}
                        >
                            <RoomIcon fontSize='small' sx={{ mr: 1 }} /> 90 st.,Katameya.
                            <br />
                            Cairo, EGYPT 
                        </Typography>
                        <Typography
                            variant='body2'
                            color='#BDBDBD'
                            sx={{
                                alignItems: 'top',
                                display: 'flex',
                            }}
                            my={1}
                        >
                            <LocalPhoneIcon fontSize='small' sx={{ mr: 1 }} /> +20 1208290741
                        </Typography>
                        <Typography
                            variant='body2'
                            color='#BDBDBD'
                            sx={{
                                alignItems: 'top',
                                display: 'flex',
                            }}
                        >
                            <EmailIcon fontSize='small' sx={{ mr: 1 }} />
                            mahmoudbarakat363@gmail.com
                        </Typography><br/>
                        <Typography variant='body2' color='#BDBDBD' pb={5}>
                            Copyright @ 2023 LAYAL Inc.
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography variant='body1' fontWeight='700' color='white'>
                                    QUICK LINKS
                                </Typography>
                                <CustomLink href='/home' text='Home' />
                                <CustomLink href='/about' text='About' />
                                <CustomLink href='/projects' text='Projects' />
                                <CustomLink href='/contact' text='Contact' />
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' fontWeight='700' color='white'>
                                    LEGAL LINKS
                                </Typography>
                                <CustomLink href='#footer' text='Terms' />
                                <CustomLink href='#footer' text='Conditions' />
                                <CustomLink href='#footer' text='Policy' />
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' fontWeight='700' color='white'>
                                    LAYAL MEDIA
                                </Typography>
                                <CustomLink href='#footer' text='Facebook' />
                                <CustomLink href='#footer' text='Twitter' />
                                <CustomLink href='#footer' text='Youtube' />
                                <CustomLink href='#footer' text='Linkedin' />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}