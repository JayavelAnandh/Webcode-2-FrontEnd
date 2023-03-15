import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'




function Base ({title, description, children}) {
    // react navigator
    const navigate = useNavigate()
    return (
        <div className='main-component base-component'>

             <AppBar position='static'>
               <Toolbar variant='dense'>
                <Button 
                color='inherit'
                onClick={()=>navigate("/adminLogin")}>
                 <span className="icon">⭐</span> 
                 <span className="nav-name">Admin(LogIn)</span>
                </Button>

                <Button 
                color='inherit' 
                onClick={()=>navigate("/clientLogIn")}>
                   <span className="icon">⭐</span> 
                   <span className="nav-name">client(LogIn)</span>
                   </Button>
                <Button 

                color='inherit' 
                onClick={()=>navigate("/clientSignup")}>
                 <span className="icon">⭐</span>  
                 <span className="nav-name">client(Signup)</span> 
                </Button>
                    
                     <Button 
                color='inherit'
                 onClick={()=>navigate("/createTheatre")}>
                  <span className="icon">⭐</span>
                  <span className="nav-name">create - -Theatre</span> 
                     </Button>
                     
                     <Button 
                color='inherit'
                 onClick={()=>navigate("/bookingLogs")}>
                  <span className="icon">⭐</span>
                  <span className="nav-name">bookingLogs</span> 
                     </Button>

                     <Button 
                color='inherit'
                 onClick={()=>navigate("/deleteTheater")}>
                  <span className="icon">⭐</span>
                  <span className="nav-name">Remove a theatre from Website</span> 
                     </Button>

               </Toolbar>
            </AppBar>
            <header>
                <h1 className='heading'>{title}</h1>
            </header>
            <main className='main-segment'>
               <h2>{description}</h2>

               <div>
                  {children}
               </div>
            </main>
          
        </div>
    )
}

export default Base
