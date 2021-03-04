
export default function portfolio(){

    const portLinks = [
        {
           title:'Threads',
           caption:'Illustration'
        },
        {
           title:'Explore',
           caption:'Graphic Design'
        },
        {
           title:'Finish',
           caption:'Identity'
        },
        {
           title:'Southwest',
           caption:'Website Design'
        },
        {
           title:'Windows',
           caption:'Photography'
        },
        {
           title:'Lines',
           caption:'Branding'
        }
     ]

   return (
      <section className="page-section bg-light" id="portfolio">
         <div className="container">
            <div className="text-center">
               <h2 className="section-heading text-uppercase">Portfolio</h2>
               <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
               </h3>
            </div>
            <div className ="row">
               {
                portLinks.map((item) => 
                     <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                           <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                              <div className="portfolio-hover">
                                 <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x" />
                                 </div>
                              </div> 
                              <img className="img-fluid" src="https://unsplash.it/340/170/?random"  alt=""/>
                           </a>
                           <div className="portfolio-caption">
                              <div className="portfolio-caption-heading"> { item.title } </div>
                              <div className="portfolio-caption-subheading text-muted"> { item.caption } </div>
                           </div>
                        </div>
                     </div>
                  )
                }
            </div>
         </div>
      </section>
   )
};
