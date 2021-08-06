import react,{useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Mission() {
   const data = [
      {
         text: " #2- Equality",
         icon: "fas fa-fist-raised fa-stack-1x fa-inverse",
         caption:
            "We believe in Equality and Humanity",
         aos:"fade-right",
      },
      {
         text: "#3- Opportunity",
         icon: "fas fa-hand-holding-heart fa-stack-1x fa-inverse",
         caption:
            "Giving opportunity for people, who lost behind be like, giving new life as gift to them,  ",
            aos:"fade-up",
      },
      {
         text: "#4- Community",
         icon: "fas fa-praying-hands fa-stack-1x fa-inverse",
         caption:
            "As Human being part of society and Community and ",
            aos:"fade-left",
      },
   ];
   
   // -------------------------------------------------- 
   useEffect(() =>{
      Aos.init({ duration:1500});
   })


   return (
      <section className="page-section" id="mission" >
         
         <div className="container">
            <div data-aos="fade-down" className="text-center">
               <h2 className="section-heading text-uppercase">our mission</h2>
               <h3 className="section-subheading text-muted">
                  #1-  we believe in our work and the Change can happen.
               </h3>
            </div>

            <div className="row text-center">
               {data.map((item) => (
                  <div data-aos={item.aos} className="col-md-4">
                     <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className={item.icon}></i>
                     </span>
                     <h4 className="my-3">{item.text}</h4>
                     <p className="text-muted">{item.caption}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
