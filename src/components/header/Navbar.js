import React from "react";

function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top sticked">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center">

          <h1>Provider</h1>
        </a>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>

            <li className="dropdown"><a href="services.html"><span>Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a href="pricing.html">Get Membership</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html">Carrer</a></li>
            <li><a href="get-a-quote.html">Get a Quote</a></li>
            <li><a href="about.html">About</a></li>
            <li><a className="store" href="store.html">Store</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
