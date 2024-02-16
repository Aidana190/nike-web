import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import  LockOutlinedIcon  from "@mui/icons-material/LockOutlined";
import { Copyright } from "@mui/icons-material";

const Auth = () => {
  const {
        user,
        email, 
        password,
        emailError,
        passwordError,
        setEmail,
        setEmailError,
        setUser,
        setPassword,
        setPasswordError,
        handleRegister,
        handleLogOut,
        handleLogin,
        hasAccount,
        setHasAccount,
  } = useAuth()
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(event);
  }
  console.log(emailError, passwordError);
  return (
    <div style={{backgroundColor:'#333', height:'100vh'}}> 
 <Container sx={{bgcolor:"white"}} component="main" maxWidth="xs">
     <Box sx={{
        display: "flex",
        flexDirection: 
        "column", 
        alignItems:"center"}} >
         <Avatar sx={{m:1, bgcolor: "black"}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          {hasAccount ? "Welcome back" : "Create your account"}
        </Typography>
        <Box onSubmit={handleSubmit} component="form"
             sx={{mt:1}}
        >
           <TextField 
         label="Email Address" 
         name="email"
         autoFocus
         autoComplete="email"
         required
         value={email} 
         onChange={(e)=> setEmail(e.target.value)} 
         helperText={emailError}
         fullWidth
         id="email"
         margin="normal"
         />
           <TextField 
         label="Password 
         "value={password} onChange={(e)=> setPassword(e.target.value)} 
          helperText={passwordError}
          name="password"
          autoFocus
          autoComplete="current-password"
          required
          fullWidth
          id="password"
          type="password"
          margin="normal"
         />
          {hasAccount ? <Button type="submit" variant="contained" onClick={handleLogin} sx={{mt:3, mb: 2, backgroundColor:"black"}} fullWidth>
          Log In
          </Button> : <Button type="submit" variant="contained" onClick={handleRegister} sx={{mt:3, mb: 2, backgroundColor:"black"}} fullWidth>
           Register
          </Button>}
          <Grid container>
            <Grid item>
                <Typography 
                variant="body2"
                onClick={()=> setHasAccount(!hasAccount)}
                 sx={{cursor:"pointer", 
                textDecoration:"underline"}}>
                  {hasAccount ? `Don't have an account? Register Now` :
                  "Already have account? Login "}
                </Typography>
            </Grid>
          </Grid>
        </Box>
     </Box>
      </Container>
    </div>
  
  )
};

export default Auth;

