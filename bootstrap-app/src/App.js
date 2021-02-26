import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./Components/Portfolio";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";

function App() {
   return (
      <div className="App">
         <Nav />     
         <Loading />
         <Services />
         <Portfolio />
         <About />
         <Team />

         <div className="py-5">
            <div className="container">
               <div className="row">
                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!">
                        <img
                           className="img-fluid d-block mx-auto"
                           src="assets/img/logos/envato.jpg"
                           alt=""
                        />
                     </a>
                  </div>

                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!">
                        <img
                           className="img-fluid d-block mx-auto"
                           src="assets/img/logos/designmodo.jpg"
                           alt=""
                        />
                     </a>
                  </div>

                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!">
                        <img
                           className="img-fluid d-block mx-auto"
                           src="assets/img/logos/themeforest.jpg"
                           alt=""
                        />
                     </a>
                  </div>

                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!">
                        <img
                           className="img-fluid d-block mx-auto"
                           src="assets/img/logos/creative-market.jpg"
                           alt=""
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <Contact />

         <footer className="footer py-4">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-4 text-lg-left">
                     Copyright © Your Website 2020
                  </div>
                  <div className="col-lg-4 my-3 my-lg-0">
                     <a className="btn btn-dark btn-social mx-2" href="#!">
                        <i className="fa fa-twitter"></i>
                     </a>
                     <a className="btn btn-dark btn-social mx-2" href="#!">
                        <i className="fa fa-facebook-f"></i>
                     </a>
                     <a className="btn btn-dark btn-social mx-2" href="#!">
                        <i className="fa fa-linkedin"></i>
                     </a>
                  </div>
                  <div className="col-lg-4 text-lg-right">
                     <a className="mr-3" href="#!">
                        Privacy Policy
                     </a>
                     <a href="#!">Terms of Use</a>
                  </div>
               </div>
            </div>
         </footer>

         {/* end of the file  */}

         <div
            className="portfolio-modal modal fade"
            id="portfolioModal1"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                     <img src="assets/img/close-icon.svg" alt="Close modal" />
                  </div>
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="modal-body">
                              <h2 className="text-uppercase">Project Name</h2>
                              <p className="item-intro text-muted">
                                 Lorem ipsum dolor sit amet consectetur.
                              </p>
                              <img
                                 className="img-fluid d-block mx-auto"
                                 src="assets/img/portfolio/01-full.jpg"
                                 alt=""
                              />
                              <p>
                                 Use this area to describe your project. Lorem
                                 ipsum dolor sit amet, consectetur adipisicing
                                 elit. Est blanditiis dolorem culpa incidunt
                                 minus dignissimos deserunt repellat aperiam
                                 quasi sunt officia expedita beatae cupiditate,
                                 maiores repudiandae, nostrum, reiciendis facere
                                 nemo!
                              </p>
                              <ul className="list-inline">
                                 <li>Date: January 2020</li>
                                 <li>Client: Threads</li>
                                 <li>Category: Illustration</li>
                              </ul>
                              <button
                                 className="btn btn-primary"
                                 data-dismiss="modal"
                                 type="button"
                              >
                                 <i className="fa fa-times mr-1"></i>
                                 Close Project
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="portfolio-modal modal fade"
            id="portfolioModal2"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                     <img src="assets/img/close-icon.svg" alt="Close modal" />
                  </div>
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="modal-body">
                              <h2 className="text-uppercase">Project Name</h2>
                              <p className="item-intro text-muted">
                                 Lorem ipsum dolor sit amet consectetur.
                              </p>
                              <img
                                 className="img-fluid d-block mx-auto"
                                 src="assets/img/portfolio/02-full.jpg"
                                 alt=""
                              />
                              <p>
                                 Use this area to describe your project. Lorem
                                 ipsum dolor sit amet, consectetur adipisicing
                                 elit. Est blanditiis dolorem culpa incidunt
                                 minus dignissimos deserunt repellat aperiam
                                 quasi sunt officia expedita beatae cupiditate,
                                 maiores repudiandae, nostrum, reiciendis facere
                                 nemo!
                              </p>
                              <ul className="list-inline">
                                 <li>Date: January 2020</li>
                                 <li>Client: Explore</li>
                                 <li>Category: Graphic Design</li>
                              </ul>
                              <button
                                 className="btn btn-primary"
                                 data-dismiss="modal"
                                 type="button"
                              >
                                 <i className="fa fa-times mr-1"></i>
                                 Close Project
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="portfolio-modal modal fade"
            id="portfolioModal3"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                     <img src="assets/img/close-icon.svg" alt="Close modal" />
                  </div>
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="modal-body">
                              <h2 className="text-uppercase">Project Name</h2>
                              <p className="item-intro text-muted">
                                 Lorem ipsum dolor sit amet consectetur.
                              </p>
                              <img
                                 className="img-fluid d-block mx-auto"
                                 src="assets/img/portfolio/03-full.jpg"
                                 alt=""
                              />
                              <p>
                                 Use this area to describe your project. Lorem
                                 ipsum dolor sit amet, consectetur adipisicing
                                 elit. Est blanditiis dolorem culpa incidunt
                                 minus dignissimos deserunt repellat aperiam
                                 quasi sunt officia expedita beatae cupiditate,
                                 maiores repudiandae, nostrum, reiciendis facere
                                 nemo!
                              </p>
                              <ul className="list-inline">
                                 <li>Date: January 2020</li>
                                 <li>Client: Finish</li>
                                 <li>Category: Identity</li>
                              </ul>
                              <button
                                 className="btn btn-primary"
                                 data-dismiss="modal"
                                 type="button"
                              >
                                 <i className="fa fa-times mr-1"></i>
                                 Close Project
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="portfolio-modal modal fade"
            id="portfolioModal4"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                     <img src="assets/img/close-icon.svg" alt="Close modal" />
                  </div>
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="modal-body">
                              <h2 className="text-uppercase">Project Name</h2>
                              <p className="item-intro text-muted">
                                 Lorem ipsum dolor sit amet consectetur.
                              </p>
                              <img
                                 className="img-fluid d-block mx-auto"
                                 src="assets/img/portfolio/04-full.jpg"
                                 alt=""
                              />
                              <p>
                                 Use this area to describe your project. Lorem
                                 ipsum dolor sit amet, consectetur adipisicing
                                 elit. Est blanditiis dolorem culpa incidunt
                                 minus dignissimos deserunt repellat aperiam
                                 quasi sunt officia expedita beatae cupiditate,
                                 maiores repudiandae, nostrum, reiciendis facere
                                 nemo!
                              </p>
                              <ul className="list-inline">
                                 <li>Date: January 2020</li>
                                 <li>Client: Lines</li>
                                 <li>Category: Branding</li>
                              </ul>
                              <button
                                 className="btn btn-primary"
                                 data-dismiss="modal"
                                 type="button"
                              >
                                 <i className="fa fa-times mr-1"></i>
                                 Close Project
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="portfolio-modal modal fade"
            id="portfolioModal5"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                     <img src="assets/img/close-icon.svg" alt="Close modal" />
                  </div>
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="modal-body">
                              <h2 className="text-uppercase">Project Name</h2>
                              <p className="item-intro text-muted">
                                 Lorem ipsum dolor sit amet consectetur.
                              </p>
                              <img
                                 className="img-fluid d-block mx-auto"
                                 src="assets/img/portfolio/05-full.jpg"
                                 alt=""
                              />
                              <p>
                                 Use this area to describe your project. Lorem
                                 ipsum dolor sit amet, consectetur adipisicing
                                 elit. Est blanditiis dolorem culpa incidunt
                                 minus dignissimos deserunt repellat aperiam
                                 quasi sunt officia expedita beatae cupiditate,
                                 maiores repudiandae, nostrum, reiciendis facere
                                 nemo!
                              </p>
                              <ul className="list-inline">
                                 <li>Date: January 2020</li>
                                 <li>Client: Southwest</li>
                                 <li>Category: Website Design</li>
                              </ul>
                              <button
                                 className="btn btn-primary"
                                 data-dismiss="modal"
                                 type="button"
                              >
                                 <i className="fa fa-times mr-1"></i>
                                 Close Project
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            className="portfolio-modal modal fade"
            id="portfolioModal6"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                     <img src="assets/img/close-icon.svg" alt="Close modal" />
                  </div>
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="modal-body">
                              <h2 className="text-uppercase">Project Name</h2>
                              <p className="item-intro text-muted">
                                 Lorem ipsum dolor sit amet consectetur.
                              </p>
                              <img
                                 className="img-fluid d-block mx-auto"
                                 src="assets/img/portfolio/06-full.jpg"
                                 alt=""
                              />
                              <p>
                                 Use this area to describe your project. Lorem
                                 ipsum dolor sit amet, consectetur adipisicing
                                 elit. Est blanditiis dolorem culpa incidunt
                                 minus dignissimos deserunt repellat aperiam
                                 quasi sunt officia expedita beatae cupiditate,
                                 maiores repudiandae, nostrum, reiciendis facere
                                 nemo!
                              </p>
                              <ul className="list-inline">
                                 <li>Date: January 2020</li>
                                 <li>Client: Window</li>
                                 <li>Category: Photography</li>
                              </ul>
                              <button
                                 className="btn btn-primary"
                                 data-dismiss="modal"
                                 type="button"
                              >
                                 <i className="fa fa-times mr-1"></i>
                                 Close Project
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
