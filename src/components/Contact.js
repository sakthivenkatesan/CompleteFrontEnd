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
    const[customerId,setCustomerId]=useState('')
    const[addressLine,setAddressLine]=useState('')
    const[city,setCity]=useState('')
    const[country,setCountry]=useState('')
    const[mobileNo,setMobileNo]=useState('')
    const[state,setState]=useState('')
    const[zipCode,setZipCode]=useState('')

    const[contacts,setContacts]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const contact={customerId,addressLine,city,country,mobileNo,state,zipCode}
    console.log(contact)
    fetch("http://localhost:8080/contact/addContact",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(contact)

  }).then(()=>{
    console.log("New contact added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/contact/getAllContacts")
  .then(res=>res.json())
  .then((result)=>{
    setContacts(result);
  }
)
},[])
  return (

    <Container>
        {/* <Paper elevation={3} style={paperStyle}> */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <h1 style={{color:'#5e2f01'}}>Enter personal details</h1>

    <form classusername={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Customer-ID" variant="outlined" fullWidth 
      value={customerId}
      onChange={(e)=>setCustomerId(e.target.value)}
      />
      <TextField id="outlined-basic" label="AddressLine" variant="outlined" fullWidth
      value={addressLine}
      onChange={(e)=>setAddressLine(e.target.value)}
      />
      <TextField id="outlined-basic" label="City" variant="outlined" fullWidth
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
      <TextField id="outlined-basic" label="Country" variant="outlined" fullWidth
      value={country}
      onChange={(e)=>setCountry(e.target.value)}
      />
       <TextField id="outlined-basic" label="Mobile-No" variant="outlined" fullWidth
      value={mobileNo}
      onChange={(e)=>setMobileNo(e.target.value)}
      />
       <TextField id="outlined-basic" label="State" variant="outlined" fullWidth
      value={state}
      onChange={(e)=>setState(e.target.value)}
      />
       <TextField id="outlined-basic" label="Zipcode" variant="outlined" fullWidth
      value={zipCode}
      onChange={(e)=>setZipCode(e.target.value)}
      />
      <Button variant="contained" color= '#303030' onClick={handleClick}>
      <Link class="link" to= "/updated_page">Update Contact</Link>
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


    {/* </Paper> */}



    </Container>
  );
}