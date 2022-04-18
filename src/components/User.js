import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function () {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[users,setUsers]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const user={username,password}
    console.log(user)
    fetch("http://localhost:8080/user/addUser",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then(()=>{
    console.log("New user added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/user/getAllUsers")
  .then(res=>res.json())
  .then((result)=>{
    setUsers(result);
  }
)
},[])
  return (

    <Container>
            <h1 style={{color:'#5e2f01'}}>Login</h1>

    <form classusername={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth 
      value={username}
      onChange={(e)=>setUserName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" color='#303030' onClick={handleClick}>
      <Link id = "l1" to= "/user_home">Login</Link>
</Button>
    </form>
   
    {/* </Paper>
    <h1>Users</h1>

    <Paper elevation={3} style={paperStyle}>

      {users.map(user=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
         Id:{user.id}<br/>
         username:{user.username}<br/>
         Password:{user.password}

        </Paper>
      ))
} */}





    </Container>
  );
}