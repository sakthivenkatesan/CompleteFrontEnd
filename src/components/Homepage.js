import { Link } from "react-router-dom"
import logo from "./logo.png";
import product from "./product.jpg"
import service from "./service.jpg"
import offer from "./offer.jpg"
import ig from "./ig.png"
import twt from "./twt.png"
import fb from "./fb.png"
import "./Homepage.css"
function Homepage()
{
    return (
        <div className="form-group" id="bd"><img id = "logo" src={logo} alt="Logo"/><span id="name">Buon Viaggio</span><br/>
        <button type="button" class="btn" id = "l"><Link id = "l1" to= "/add_user">Login</Link></button>
        <button type="button" class="btn" id = "al"><Link id = "l2" to= "/add_new_user">Sign Up</Link></button>
        <div class="cards">
            <article class = "card"><header><h2>Products</h2></header><img src={product}/><div class="content">
            <p> We offer transport services for both passengers and freight at affordable price. Currently, the airlines is limited within the country.</p>
        </div></article>
        <article class = "card"><header><h2>Services</h2></header><img src={service}/><div class="content">
            <p> Our flights are not only limited to international airports, instead they also cover almost every airport in the country to provide great customer satisfaction.</p>
        </div></article>
        <article class = "card"><header><h2>Deals of the day</h2></header><img src={offer}/><div class="content">
            <p> Everyday we offer special offers for flight booking from a certain city to another for our premium customers. Visit our Instagram page to know more.</p>
        </div></article>
        </div>
        <div class = "footer"><h3 class = "au">About us:</h3><p class="au">Established at 2017, Buon Viaggio has constantly helped the commoners to achieve their dream of travelling in airplane since the beginning. We're planning to get another feather on our hat by adding accommodation services which will be added shortly. </p>
        <p id="fo">Follow us on:</p>
        <a target="_blank" href="https://www.instagram.com/"><img class="lg" src={ig}/></a>
        <a target="_blank" href="https://www.twitter.com/"><img class="lg" src={twt}/></a>
        <a target="_blank" href="https://www.facebook.com/"><img class="lg" src={fb}/></a>
        </div>
        </div>
    )
}
export default Homepage;