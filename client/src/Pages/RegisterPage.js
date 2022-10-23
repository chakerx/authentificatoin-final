import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ClearErrors, Register } from '../Redux/UserSlice';
import {useNavigate} from 'react-router-dom'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();

const RegisterPage = () => {
  const errors = useSelector(state=> state.User.Errors)
  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.User.isAuth)   //njibou isAuth mel store bel useSelector (kalmet User mawjouda fel sore.js)

  useEffect(()=>{
    dispatch(ClearErrors())
    if(isAuth){
        navigate('/profilpage')    //mane5dmou navigate kan bel useEffect
    }
    else{
        navigate('/register')
    }
 
},[isAuth])

    const dispatch = useDispatch()                             //
    const SignUp =(e)=>{       //wen hez n7otha fi button      //
        e.preventDefault()     //yna7i el refrech              //  bach ki nenzel ta3meli register wnchofa fel inspect.redux
        dispatch(Register(newUser))     //register mta3 slice  //
    }                    //newUser li saminah wsna3neh fel slice

    const [newUser,setNewUser] = useState({})                           //
    const HandleChange = (e)=>{       //wen hez n7otha fi kol input     //bach li nektba yab9a fam wnchofa fel inspect.component
        setNewUser({...newUser, [e.target.name] : e.target.value})      //
    }
  return (
    <div>
    <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={HandleChange}
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             onChange={HandleChange}
            type='number'
              required
              fullWidth
              id="age"
              label="age"
              name="age"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            onChange={HandleChange}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
           <p>{errors?.email?.msg}</p> 
          </Grid>
          <Grid item xs={12}>
            <TextField
             onChange={HandleChange}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
        
        <p>{errors?.password?.msg}</p>

          </Grid>
          <Grid item xs={12}>
            
          </Grid>

        </Grid>
        <Button
          onClick={SignUp}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
  </Container>
</ThemeProvider>
</div>
  )
}

export default RegisterPage