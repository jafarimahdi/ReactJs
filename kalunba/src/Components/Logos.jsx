
export default function Logos() {
   const logos = [
      { pic: "pictures/kalunba/logo-rbg.png" },
      { pic: "pictures/kalunba/scottishmission.jpg" },
      { pic: "pictures/kalunba/reformatus.png" },
   ];
   return (
      <div className="py-5">
         <div className="container">
            <div className="row">
               {logos.map((item) => (
                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!">
                        <img
                           className="img-fluid d-block mx-auto"
                           src={item.pic}
                           alt=""
                           style={{ Width: "21rem;", height:"3vw;" }}
                        />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
