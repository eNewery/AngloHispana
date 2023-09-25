"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Header = () => {
  const [burger, setBurger] = useState(false);
  useEffect(() => {
    const headerLinksMedia = document.querySelector(".headerLinksMedia")
if (burger === false) {
  headerLinksMedia.style.animation = "headerOut 1s both"
  setTimeout(() => {
    headerLinksMedia.style.display = "none"
  }, 1000);
}
if (burger === true) {
  headerLinksMedia.style.display = "flex"
  headerLinksMedia.style.animation = "headerEnter 1s both"
}
  }, [burger])
  
  return (
    <div className="headerContainer">
      <div className="headerLogo"></div>
      <nav className="headerLinks">
        <ul>
          <li>
            <Link href="#">Nosotros</Link>
          </li>
          <li>
            <Link href="#">Servicios</Link>
          </li>
          <li>
            <Link href="#">Filiales</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="burgerMenu">
        <span onClick={() => setBurger(!burger)} class="material-symbols-outlined">menu</span>
      </div>
      <div className="headerLinksMedia"><ul><li className="headerLinkMedia"><Link href="#">Nosotros</Link></li>
      <li className="headerLinkMedia"><Link href="#">Servicios</Link></li>
      <li className="headerLinkMedia"><Link href="#">Filiales</Link></li>
      <li className="headerLinkMedia"><Link href="#">Blog</Link></li></ul></div>
    </div>
  );
};

export default Header;
