import React, { useState } from "react";
import Button from "./Button";
import "../styles/components/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import  BrandName from "./BrandName";
import {motion} from "framer-motion";
import {navbarAnimation} from "../Animation";





export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <motion.div
      className={`navbar ${toggleNavbar === true ? "active" : ""}`}
      variants={navbarAnimation}
      transition={{ delay: 0.1 }}
    >
    
      <div className="col">

      <div className="collapseble-button">

{!toggleNavbar ? (
  <GiHamburgerMenu onClick={navbarToggler} />
) : (
  <MdClose onClick={navbarToggler} />
)}

</div>
<div className="brandn">
        <BrandName className="brandn2" />
        </div> 

       

      </div>

      <nav>

        <div className="links">
          <ul className="abs">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#testimonial">Testimonial</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <Button content="Contact" />
            </li>
          </ul>

        </div>
      </nav>

    </motion.div>
  );
}