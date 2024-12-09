import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/RouteConstants";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(43, 49, 73)", color: "white" }}
      className="py-4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <h3 className="fw-bold">TICKET HUB</h3>
            <p>
              Best App For Movie Lovers In India! </p>
            <p>Movie Entertainment
              Platform From Cinema To Online Movie Streaming Selections.</p>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6 mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none  text-white">
                  Now Showing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white" >
                  Book Now
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white" >
                  Spotlight
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white" >
                  Video & Trailers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <NavLink to={ROUTES.CONTACTUS} className="text-decoration-none text-white">
                  Contact Us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={ROUTES.RETURN_POLICY} className="text-decoration-none text-white" >
                  Return Policy
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={ROUTES.TERMS_CONDITION} className="text-decoration-none text-white" >
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <h5 className="fw-bold">Ticket Hub Support</h5>
            <p>
              Email:{" "}
              <a
                href="mailto: help@tickethub.com"
                className="text-decoration-none text-white"
              >
                help@tickethub.com
              </a>
            </p>

            <h5 className="fw-bold">Follow Us</h5>
            <div>
              <a
                href="https://www.instagram.com/accounts/login/"
                className="text-decoration-none text-white me-3"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a
                href="https://www.facebook.com/login/"
                className="text-decoration-none text-white me-3"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-decoration-none text-white me-3"
              >
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a
                href="https://x.com/i/flow/login"
                className="text-decoration-none text-white"
              >
                <i className="bi bi-twitter fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-text text-center pt-3">
          <p className="mb-0">2024 TICKET HUB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

