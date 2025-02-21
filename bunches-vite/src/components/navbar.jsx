import React from "react";
import "./navbar.css";

function SideMenu() {
  return (
    <>
      <div className="profile-cart flex h-full ml-auto gap-5 p-5 filter-(--pink-logo)">
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

      <aside className="sidemenu"></aside>
    </>
  );
}

function Navbar() {
  return (
    <div className="flex items-center fixed w-screen h-20 px-5">
      <p className="title font-display font-black text-[#e76b8e] text-2xl">
        bunches.
      </p>
      <SideMenu />
    </div>
  );
}

export default Navbar;
