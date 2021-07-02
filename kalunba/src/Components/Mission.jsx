export default function Mission() {
   const data = [
      {
         text: "Equality",
         icon: "fas fa-fist-raised fa-stack-1x fa-inverse",
         caption:
            "We believe in Equality and Humanity",
      },
      {
         text: "Opportunity",
         icon: "fas fa-hand-holding-heart fa-stack-1x fa-inverse",
         caption:
            "Giving opportunity for people, who lost behind be like, giving new life as gift to them,  ",
      },
      {
         text: "Community",
         icon: "fas fa-praying-hands fa-stack-1x fa-inverse",
         caption:
            "As Human being part of society and Community and ",
      },
   ];

   return (
      <section className="page-section" id="mission">
         <div className="container">
            <div className="text-center">
               <h2 className="section-heading text-uppercase">our mission</h2>
               <h3 className="section-subheading text-muted">
                  we believe in our work and the Change can happen.
               </h3>
            </div>

            <div className="row text-center">
               {data.map((item) => (
                  <div className="col-md-4">
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
