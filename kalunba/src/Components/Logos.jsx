
export default function Logos() {
   const logos = [
      { pic: "pictures/envato.jpg" },
      { pic: "pictures/designmodo.jpg" },
      { pic: "pictures/themeforest.jpg" },
      { pic: "pictures/creative-market.jpg" },
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
                        />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
