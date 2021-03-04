export default function About() {
   const data = [
      {
         time: "2009 - 2011",
         text: "Our Humble Beginnings",
         description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      },
      {
         time: "March 2011",
         text: "An Agency is Born",
         description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      },
      {
         time: "December 2012",
         text: "Transition to Full Service",
         description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      },
      {
         time: "July 2014",
         text: "Phase Two Expansion",
         description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      },
   ];
   let count = 0;
   return (
      <section className="page-section" id="about">
         <div className="container">
            <div className="text-center">
               <h2 className="section-heading text-uppercase">About</h2>
               <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
               </h3>
            </div>

            <ul className="timeline">
               {data.map((item) => (

                  <li  className={count % 2 === 0 ? "timeline-inverted":""} > 

                     <div className="timeline-image">
                        <img
                           className="rounded-circle img-fluid"
                           src="assets/img/about/1.jpg"
                           alt=""
                        />
                     </div>
                     <div className="timeline-panel">
                        <div className="timeline-heading">
                           <h4>{item.time}</h4>
                           <h4 className="subheading">{item.text}</h4>
                        </div>
                        <div className="timeline-body">
                           <p className="text-muted">{item.description}</p>
                        </div>
                     </div>
                    <p style={{'display':'none'}}>{count +=1}</p>
                  </li >
               ))}

               <li className="timeline-inverted">
                  <div className="timeline-image">
                     <h4>Be Part<br />Of Our<br />Story! </h4>
                  </div>
               </li>
            </ul>
         </div>
      </section>
   );
}
