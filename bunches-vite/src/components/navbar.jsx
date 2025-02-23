import React from "react";
import "./navbar.css";

function SideMenu() {
  return (
    <>
      <div className="profile-cart flex h-full ml-auto gap-5 filter-(--dark-pink-logo)">
        <label for="cart">
          <input
            type="checkbox"
            className="sidemenu-btn hidden"
            id="cart"
          ></input>
          <img
            className="w-full h-full"
            src="https://www.svgrepo.com/show/506748/shopping-bag.svg"
            alt=""
          />
        </label>
        <label for="profile">
          <input
            type="checkbox"
            className="sidemenu-btn hidden"
            id="profile"
          ></input>
          <img
            className="w-full h-full"
            src="https://www.svgrepo.com/show/506772/user.svg"
            alt=""
          />
        </label>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center fixed w-screen h-(--navbar-height) px-10 py-5 z-999">
      <img
        className="h-full filter-(--dark-pink-logo) animate-spin"
        id="flower"
        src="https://www.svgrepo.com/show/357793/flower.svg"
        alt=""
      />
      <a
        href=""
        className="title font-display font-black text-(--custom-dark-pink) text-2xl pl-15"
      >
        bunches.
      </a>
      <SideMenu />
    </div>
  );
}

export default Navbar;
