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
    const[Fleetid,setFleetid]=useState('')
    const[FleetCode,setFleetCode]=useState('')
    const[FleetModel,setFleetModel]=useState('')
    const[EconomySeats,setEconomySeats]=useState('')
    const[PremiumSeats,setPremiumSeats]=useState('')
    const[BusinessSeats,setBusinessSeats]=useState('')


    const[fleets,setFleets]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const fleet={Fleetid,FleetCode,FleetModel,EconomySeats,PremiumSeats,BusinessSeats}
    console.log(fleet)
    fetch("http://localhost:8080/Fleet/addFleet",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(fleet)

  }).then(()=>{
    console.log("New Fleet added")
  })
}


  return (

    <Container>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <h1 style={{color:'#5e2f01'}}>Add Fleet Details</h1>

    <form classFleetid={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Fleetid" variant="outlined" fullWidth 
      value={Fleetid}
      onChange={(e)=>setFleetid(e.target.value)}
      />

      <TextField id="outlined-basic" label="FleetCode" variant="outlined" fullWidth
      value={FleetCode}
      onChange={(e)=>setFleetCode(e.target.value)}
      />

      <TextField id="outlined-basic" label="FleetModel" variant="outlined" fullWidth 
      value={FleetModel}
      onChange={(e)=>setFleetModel(e.target.value)}
      />

      <TextField id="outlined-basic" label="EconomySeats" variant="outlined" fullWidth 
      value={EconomySeats}
      onChange={(e)=>setEconomySeats(e.target.value)}
      />

      <TextField id="outlined-basic" label="PremiumSeats" variant="outlined" fullWidth 
      value={PremiumSeats}
      onChange={(e)=>setPremiumSeats(e.target.value)}
      />

      <TextField id="outlined-basic" label="BusinessSeats" variant="outlined" fullWidth 
      value={BusinessSeats}
      onChange={(e)=>setBusinessSeats(e.target.value)}
      />

<Button variant="contained" color= '#303030' onClick={handleClick}>
      <Link class="link" to= "/updated_page">Update fleet</Link>
</Button>
    </form>

    </Container>
  );
}