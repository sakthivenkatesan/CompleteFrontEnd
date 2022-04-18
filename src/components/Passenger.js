import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom"
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
    const[passengerId,setPassengerId]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('');
    const[age,setAge]=useState('')
    const[gender,setGender]=useState('') 
    const[passportNo,setPassortNo]=useState('')
    const[mealPref,setMealPref]=useState([])

    const[passengers,setPassengers]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const passenger={passengerId,firstName,lastName,age,gender,passportNo,mealPref}
    console.log(passenger)
    fetch("http://localhost:8080/passenger/addPassenger",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(passenger)

  }).then(()=>{
    console.log("New Passenger added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/passenger/getAllPAssenger")
  .then(res=>res.json())
  .then((result)=>{
    setPassengers(result); 
  }
)
},[])
  return (

    <Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        {/* <Paper elevation={3} style={paperStyle}> */}
            <h1 style={{color:'#5e2f01'}}>Enter Passenger details</h1>

    <form classusername={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Passenger-ID" variant="outlined" fullWidth 
      value={passengerId}
      onChange={(e)=>setPassengerId(e.target.value)}
      />
      <TextField id="outlined-basic" label="FirstName" variant="outlined" fullWidth
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="LastName" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Age" variant="outlined" fullWidth
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
      <TextField id="outlined-basic" label="Gender" variant="outlined" fullWidth
      value={gender}
      onChange={(e)=>setGender(e.target.value)}
      />
      <TextField id="outlined-basic" label="PassportNo" variant="outlined" fullWidth
      value={passportNo}
      onChange={(e)=>setPassortNo(e.target.value)}
      /> 
      <TextField id="outlined-basic" label="MealPref" variant="outlined" fullWidth
      value={mealPref}
      onChange={(e)=>setMealPref(e.target.value)}
      />  
      <Button variant="contained" color= '#303030' onClick={handleClick}>
      <Link class="link" to= "/updated_page">Update passenger</Link>
</Button>
    </form>
    </Container>
  );
}