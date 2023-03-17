import { Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { Box } from '@mui/system'
import CustomButton from '../CustomButton'


export default function Input({showToastMessage}) {
    const [input, setInput] = useState({ firstName: "", lastName: "", phone: "", comment: "", email: "" })
    const inputHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setInput((prev) => ({ ...prev, [inputName]: inputValue }))
    }

    const formHandler = (e) => {
        e.preventDefault();
        setInput({ firstName: "", lastName: "", comment: "" })
    }
    return (<>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={formHandler}
        >

            <div >
                <TextField
                    required
                    name="firstName"
                    value={input.firstName}
                    id="outlined-required"
                    label="First Name"
                    type="text"
                    onChange={inputHandler}
                />
                <TextField
                    required
                    name="lastName"
                    value={input.lastName}
                    placeholder='Last Name'
                    type="text"
                    onChange={inputHandler}
                />
            </div>
            <div>
                <TextField
                    required
                    name="phone"
                    value={input.phone}
                    id="outlined-required"
                    label="phone"
                    type="text"
                    onChange={inputHandler}
                />
                <TextField
                    required
                    name="email"
                    value={input.email}
                    id="outlined-required"
                    label="Email"
                    type="email"
                    onChange={inputHandler}
                />
            </div>
            <Grid  >
                <TextField
                    required
                    name="comment"
                    value={input.comment}
                    id="outlined-required"
                    label="Description"
                    type="text"
                    onChange={inputHandler}
                />

                <Box
                    component='button'
                    type='submit'
                    sx={{ backgroundColor: 'transparent', border: 'none', margin: "auto" }}
                    onClick={showToastMessage}
                >
                    <CustomButton text='Get a quote' dark />
                </Box>
            </Grid>
        </Box>
    </>
    )
}
