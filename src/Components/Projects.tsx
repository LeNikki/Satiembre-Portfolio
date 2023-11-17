import React, {useRef}from 'react';
import data from './data.tsx';
import leftClick from "./Assets/left-arrow.png"
import rightClick from "./Assets/right-arrow.png"
function Projects(props) {
  
  const carouselRef = useRef(null);
  const scrollAmount = 300; 
  const handlePrevious = () => {
  if(carouselRef.current){
    carouselRef.current.scrollLeft -=scrollAmount;
  }
  };

  const handleNext = () => {
    if(carouselRef.current){
      carouselRef.current.scrollLeft +=scrollAmount;
    }
  };

  const projects = data.map((item) => (
    <div className="proj-container" key={item.id}>
      <div className={props.theme ? 'node' : 'node-light'}>
        <section>
          <img src={item.image} className="proj-img" alt={item.title} />
        </section>
        <section className="kkk">
          <h3 className="proj-title">{item.title}</h3>
          <p>{item.desc}</p>
          <span className=".proj-click">
            <a className="proj-link" href={item.link}>
              Click to Follow Link
            </a>
          </span>
        </section>
      </div>
    </div>
  ));

  return (
    <div className="Projects-main">
        <img src={leftClick} onClick={handlePrevious} width='30' className="arrows"/>
      <div className="Projects-container"  ref={carouselRef}>
        {projects}
      </div>
      
      <img src={rightClick} width='30' onClick={handleNext}className="arrows"/>
      
    </div>
  );
}

export default Projects;
