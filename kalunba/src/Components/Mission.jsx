export default function Mission() {
   const data = [
      {
         text: "E-Commerce",
         icon: "fa fa-shopping-cart fa-stack-1x fa-inverse",
         caption:
            "Design and Make E-Commerce Website with the latest tools anc Materials",
      },
      {
         text: "Responsive Design",
         icon: "fa fa-laptop fa-stack-1x fa-inverse",
         caption:
            "do the latest technology and everyday movement, we try to use latest Design tools to make our product useful for any machine and work in any situation ",
      },
      {
         text: "Web Security",
         icon: "fa fa-lock fa-stack-1x fa-inverse",
         caption:
            "Security is one of the important part of our work and we try to keep user safety",
      },
   ];

   return (
      <section className="page-section" id="mission">
         <div className="container">
            <div className="text-center">
               <h2 className="section-heading text-uppercase">our mission</h2>
               <h3 className="section-subheading text-muted">
                  we believe in our work and product we make.
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
