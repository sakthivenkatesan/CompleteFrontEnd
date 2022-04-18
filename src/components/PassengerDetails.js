import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper,Button} from '@material-ui/core';
import "./PassengerDetails.css"

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

useEffect(()=>{
  fetch("http://localhost:8080/passenger/getAllPassenger")
  .then(res=>res.json())
  .then((result)=>{
    setPassengers(result); 
  }
)
},[])
  return (
    <div id="pp">
    <div style={{left:"100px"}}> 
    <h1>Passenger Details</h1>


  {passengers.map(passenger=>(
    <Paper elevation={6} id="pp" style={{margin:"10px",padding:"15px", textAlign:"center", fontSize:"large", backgroundColor:"#5e3001b4", color:"white", width:"300px", letterSpacing:"1.25px"}} key={passenger.id}>
     First Name:{passenger.firstName}<br/>
     Last Name:{passenger.lastName}<br/>
     Age:{passenger.age}<br/>
     Gender:{passenger.gender}<br/>
     Passport No:{passenger.passportNo}<br/>
     Meal Preference:{passenger.mealPref}
    </Paper>
  ))
}
    </div></div>
  );
}