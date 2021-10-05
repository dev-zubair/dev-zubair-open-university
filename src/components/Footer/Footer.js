import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <p>
                ©1999-2021. All rights reserved. The Open University is
                incorporated by Royal Charter (RC 000391), an exempt charity in
                England & Wales and a charity registered in Scotland (SC
                038302). The Open University is authorised and regulated by the
                Financial Conduct Authority in relation to its secondary
                activity of credit broking.
              </p>
            </div>
            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Useful Links</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Privacy</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/home">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/home">Terms & Condition</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center py-3">
          © 2021 Copyright:
          <Link to="/home"> Open University</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
