import React from 'react'
import Nicole from "./Assets/nicpic2.png"

function Home(props){
    return (
        <div className='home-cont'> 
                 <nav><p>My Portfolio </p>   
                    <p><i class={props.theme?"fa fa-sun-o":"fa fa-moon-o"} aria-hidden="true"
                    id = {props.theme?"theme-icon":"theme-light"} 
                    onClick= {()=>props.toggle()}></i>{props.theme? " Light" : " Dark"}</p>  
                 </nav>
            <div className ="home-container">  
            
            <div className="left-container">
                <img  src={Nicole} alt = "Nicole Satiembre" className = "Nicole"/>
                <p>Hover me!</p>
            </div>
            <div className={props.theme? "right-container" : "right-light"}>
                <label>
                    <strong className="Kumusta">Kumusta? I'm<h1 className="name">Nicole Satiembre</h1></strong>
                </label>
                <i class="fa-solid fa-sun" id="theme"></i> 
                <h2 className ="web-dev" >Web Developer</h2>
                
                <a className="contact" href="mailto:nicsatiembre@gmail.com">Mail me!</a>
            </div>
            </div>
    </div>)
}

export default Home