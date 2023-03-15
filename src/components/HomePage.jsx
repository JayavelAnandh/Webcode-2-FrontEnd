import { useNavigate } from "react-router-dom"
import Base from "./Base.js"

function HomePage(){
    const navigate = useNavigate()
    return(
 
                <Base>
                <h1>
                Welcome To BookMatinee
                <div className="container-lg">
                    <div className="row">
                    <h2 >Admin</h2>
                    
                    <img className="col-5" src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg" alt="" />
                 

                    <h2>Client</h2>
                    <img className="col-5" src="data:image/jpeg;base64,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" alt="" />
                    </div>
                </div>
                    
                </h1>
                </Base>



    )
}
export default HomePage