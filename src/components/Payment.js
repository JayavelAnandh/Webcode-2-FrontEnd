import { useNavigate } from "react-router-dom"
import Base from "./Base"


function Payment(){
const navigate  = useNavigate()
    setTimeout(()=>{
        navigate("/")
    },5000)
    
    return(
        <Base>
        <h2>As this is a Beta-Version</h2>
        <h4>The payments are well building Down</h4>
        <h3>Until then Enjoy Your Free Tickets</h3>
        </Base>
)
}
export default Payment