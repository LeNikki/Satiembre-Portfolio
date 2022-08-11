import React from 'react'
import data from "./data.js"
function Projects(props){
    const projects = data.map((item)=>{
        return (<div className="proj-container">
            <div className={props.theme? "node" : "node-light"}>
        <section ><img src={item.image} className="proj-img" alt={item.title} /></section>
                <section className="kkk"> 
                    <h3 className="proj-title">{item.title}</h3>
                    <p>{item.desc}</p>
                    <span className='.proj-click'><a  className="proj-link" href ={item.link}>Click to Follow Link</a></span>
                </section>
            </div>
        </div>)
    })

    return(<div className= "Projects-container" >
      
        {projects}
    </div>)
}
export default Projects