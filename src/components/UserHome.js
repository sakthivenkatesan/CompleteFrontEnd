import logo from "./logo.png";
import { Link } from "react-router-dom"
import "./UserHome.css"

function UserHome(){
    return(
        <div className="form-group" id="bd"><img id = "logo" src={logo} alt="Logo"/><span id="name">Buon Viaggio</span><br/>
        <div class="cards1">
        <article class="card1" id="c1"><div class="content"><Link class="link" to= "/add_contact">Update Personal Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link class="link" to= "/add_passenger">Add Passenger Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link class="link" to= "/passenger_details">View Passenger Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link class="link" to= "/add_location">Add Location Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link class="link" to= "/add_fleet">Add Fleet Details</Link></div></article><br/>
        <article class="card1" id="c1"><div class="content"><Link class="link" to= "/add_booking">Make Booking</Link></div></article><br/>
        </div>
        </div>
    )
}
export default UserHome;