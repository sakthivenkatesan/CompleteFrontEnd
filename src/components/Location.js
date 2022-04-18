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
    const[locationId,setLocationId]=useState('')
    const[locationName,setLocationName]=useState('')
    const[locationCode,setLocationCode]=useState('');
    const[country,setCountry]=useState('')
    const[airportName,setAirportName]=useState('') 
    const[locations,setLocations]=useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const location={locationId,locationName,locationCode,country,airportName}
    console.log(location)
    fetch("http://localhost:8080/location/addLocation",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(location)

  }).then(()=>{
    console.log("New location added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/location/getAllLocations")
  .then(res=>res.json())
  .then((result)=>{
    setLocations(result); 
  }
)
},[])
  return (

    <Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        {/* <Paper elevation={3} style={paperStyle}> */}
            <h1 style={{color:'#5e2f01'}}>Enter Location Details</h1>

    <form classusername={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Location-ID" variant="outlined" fullWidth 
      value={locationId}
      onChange={(e)=>setLocationId(e.target.value)}
      />
      <TextField id="outlined-basic" label="Location-Name" variant="outlined" fullWidth
      value={locationName}
      onChange={(e)=>setLocationName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Location-Code" variant="outlined" fullWidth
      value={locationCode}
      onChange={(e)=>setLocationCode(e.target.value)}
      />
      <TextField id="outlined-basic" label="Country" variant="outlined" fullWidth
      value={country}
      onChange={(e)=>setCountry(e.target.value)}
      />
      <TextField id="outlined-basic" label="Airport-Name" variant="outlined" fullWidth
      value={airportName}
      onChange={(e)=>setAirportName(e.target.value)}
      />
      <Button variant="contained" color= '#303030' onClick={handleClick}>
      <Link class="link" to= "/updated_page">Update Location</Link>
</Button>
    </form>
    </Container>
  );
}