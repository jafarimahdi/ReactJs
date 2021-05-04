export default function Team() {
    const ourTeam =[
      {
            pic:'',
            name:'Key Garland ',
            position:'Lead Designer',
            twitter:'#!',
            faceBook:'#!',
            likedIn:'#!'
        },
        {
            pic:'',
            name:'Larry Parker',
            position:'Lead Marketer',
            twitter:'#!',
            faceBook:'#!',
            likedIn:'#!'
        },
        {
            pic:'',
            name:'Diana Petersen',
            position:'Lead Developer',
            twitter:'#!',
            faceBook:'#!',
            likedIn:'#!'
        },
    ]
   return (

      <section className="page-section bg-light" id="team">
         <div className="container">
            <div className="text-center">
               <h2 className="section-heading text-uppercase">
                  Our Amazing Team
               </h2>
               <h3 className="section-subheading text-muted">
                  Meet our Spacial Team and know them more
               </h3>
            </div>

            <div className="row">

            {ourTeam.map((member)=>(

               <div className="col-lg-4">
                  <div className="team-member">
                     <img  className="mx-auto rounded-circle"  src={member.pic}  alt=""/>
                     <h4>{member.name}</h4>
                     <p className="text-muted">{member.position}</p>
                     <a className="btn btn-dark btn-social mx-2" href={member.twitter}>
                        <i className="fa fa-twitter"></i>
                     </a>
                     <a className="btn btn-dark btn-social mx-2" href={member.faceBook}>
                        <i className="fa fa-facebook-f"></i>
                     </a>
                     <a className="btn btn-dark btn-social mx-2" href={member.likedIn}>
                        <i className="fa fa-linkedin"></i>
                     </a>
                  </div>
               </div>
            ))}
            </div>

            <div className="row">
               <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Aut eaque, laboriosam veritatis, quos non quis ad
                     perspiciatis, totam corporis ea, alias ut unde.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
