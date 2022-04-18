import "./Update.css"
import { Link } from "react-router-dom"
import logo from "./logo.png";
function Update(){
return(
    <div className="form-group" id="bd"><img id = "logo" src={logo} alt="Logo"/><span id="name">Buon Viaggio</span><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <h1 class="u">Updated successfully!!</h1>
    <article class="card2" id="c2"><div class="content"><Link class="u" to= "/">Go to home page</Link></div></article><br/>
    </div>
)
}
export default Update;