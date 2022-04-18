import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function () {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[age,setAge]=useState('')
    const[password,setPassword]=useState('')
    const[password2,setPassword2]=useState('')
    const[users,setUsers]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const user={firstname,lastname, email, age, password, password2}
    console.log(user)
    fetch("http://localhost:8080/signUp/addNewUser",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then(()=>{
    console.log("New user added")
  })
}

// useEffect(()=>{
//   fetch("http://localhost:8080/user/getAllUsers")
//   .then(res=>res.json())
//   .then((result)=>{
//     setUsers(result);
//   }
// )
// },[])
  return (
    <Container justify = "center">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <h1 style={{color: '#5e2f01'}}>Sign Up</h1>

    <form classfirstname={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="First name" variant="outlined" required fullWidth 
      value={firstname}
      onChange={(e)=>setFirstName(e.target.value)}
      /><br/>
      <TextField id="outlined-basic" label="Last name" variant="outlined" required fullWidth 
      value={lastname}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Age" variant="outlined" required fullWidth
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
       <TextField id="outlined-basic" label="Email Id" variant="outlined" required fullWidth 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-adornment-password" label="Enter Password" variant="outlined" required fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" required fullWidth
      value={password2}
      onChange={(e)=>setPassword2(e.target.value)}
      />
      <Button variant="contained" color= '#303030' onClick={handleClick}>
      <Link class="link" to= "/updated_page">Create Account</Link>
</Button>
    </form>
   
    {/* </Paper>
    <h1>Users</h1>

    <Paper elevation={3} style={paperStyle}>

      {users.map(user=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
         Id:{user.id}<br/>
         firstname:{user.firstname}<br/>
         Password:{user.password}

        </Paper>
      ))
} */}





    </Container>
  );
}