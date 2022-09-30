import React from 'react'
import data from "./data.tsx"
function Projects(props){

    const projects = data.map((item)=>{
        return (<div className="proj-container" key={item.id}>
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

    //test
    function next(e){
        e.preventDefault()
        let next = document.getElementsByClassName("Projects-container");
        next.scrollLeft +=80;
        window.alert('Clicked')
    }
    function prev(e){
        e.preventDefault()
        let prev = document.getElementsByClassName("Projects-container");
        prev.scrollLeft -= 80;
        window.alert('Clicked')
    }

    return(<div className= "Projects-main" >
      {/*  <section className='sliders'>
            <i className="fa-solid fa-chevron-left" id="pre-btn" onClick={prev} ></i>
            <i className="fa-solid fa-chevron-right"  id="next-btn" onClick={next}></i>
        </section>*/ }
        <div className= "Projects-container">{projects}</div>
        
    </div>)
}
export default Projects