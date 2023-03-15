import { useNavigate } from "react-router-dom"


function Payment(){
const navigate  = useNavigate()
    setTimeout(()=>{
        navigate("/")
    },5000)
    
    return(
        <>
        <h2>As this is a Beta-Version</h2>
        <h4>The payments are well building Down</h4>
        <h3>Until then Enjoy Your Free Tickets</h3>
        </>
)
}
export default Payment