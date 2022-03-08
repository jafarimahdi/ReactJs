 # NEXT.js

1-  npx create-next-app myApplication 

2- cd to directory of your application for the Dependencies.

## Add react-bootstrap

* [install bootstrap package](https://react-bootstrap.github.io/getting-started/introduction/)
    > npm install react-bootstrap bootstrap


* Manually import the bootstrap.css file at the very top of your pages/_app.js file:
    >import 'bootstrap/dist/css/bootstrap.min.css';

#### Add NavBar ( react-bootstrap )

* 1- Add newPage in `/Pages`

* 2- Add `Link` with `passHref ` attribute 

 >  
    import Link from "next/Link";
    
    ........

    <Nav className=" ">
         <Link href="/" passHref>
            <Nav.Link > Home </Nav.Link>
         </Link>

         <Link href="/About" passHref>
            <Nav.Link > About  </Nav.Link>
         </Link>
    </Nav>

* 3- Add the Navbar Component to the pages/_app to be visible to all pages easily

> 
    import "bootstrap/dist/css/bootstrap.min.css";
    import Navbar from "../Components/Navbar";

    function MyApp({ Component, pageProps }) {
      return (
            <>
              <Navbar />
              <Component {...pageProps} />
            </>
        );
    }
    export default MyApp;


