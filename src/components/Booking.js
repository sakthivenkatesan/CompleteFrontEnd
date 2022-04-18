import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
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
    const[bookingId,setBookingId]=useState('')
    const[bookingnumber,setBookingNumber]=useState('')
    const[bookingdate,setBookingDate]=useState('');
    const[traveldate,setTravelDate]=useState('')
    const[totalcost,setTotalCost]=useState('') 
    const[booking,setBooking]=useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const booking={bookingId,bookingnumber,bookingdate,traveldate,totalcost}
    console.log(booking)
    fetch("http://localhost:8080/booking/addBooking",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(booking)

  }).then(()=>{
    console.log("New booking added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/booking/getAllBooking")
  .then(res=>res.json())
  .then((result)=>{
    setBooking(result); 
  }
)
},[])
  return (

    <Container>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        {/* <Paper elevation={3} style={paperStyle}> */}
            <h1 style={{color:'#5e2f01'}}>Enter Booking details</h1>

    <form classusername={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Booking-ID" variant="outlined" fullWidth 
      value={bookingId}
      onChange={(e)=>setBookingId(e.target.value)}
      />
      <TextField id="outlined-basic" label="BookingNumber" variant="outlined" fullWidth
      value={bookingnumber}
      onChange={(e)=>setBookingNumber(e.target.value)}
      />
      {/* <DatePicker value={bookingdate} onChange={setBookingDate} />  */}
     {/* <DatePicker
      label="BookingDate"
      renderInput={(params) => <TextField {...params}/>}
      value={bookingdate}
      onChange={(newValue) => {
      setBookingDate(newValue) 
      }}
    /> */} 
      <TextField id="outlined-basic" type="date" label="BookingDate" variant="outlined" fullWidth
      value={bookingdate}
      onChange={(e)=>setBookingDate(e.target.value)}
      />  
      <TextField id="outlined-basic" type="date" label="TravelDtate" variant="outlined" fullWidth
      value={traveldate}
      onChange={(e)=>setTravelDate(e.target.value)}
      /> 
       <TextField id="outlined-basic" label="TotalCost" variant="outlined" fullWidth
      value={totalcost}
      onChange={(e)=>setTotalCost(e.target.value)}
      />
      <Button variant="contained" color= '#303030' onClick={handleClick}>
      <Link class="link" to= "/updated_page">Update Booking</Link>
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