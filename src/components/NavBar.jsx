import React, { useState } from "react";
import Container from "./common/Container";
import Button from "./ui/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Container>
      <nav className="">
        <div className="bg-[#ffffff] flex flex-row justify-between items-center  h-16">
          <div className="">
            <a href="/">
              <img
                src="/images/post-pilot-logo/logo.png"
                alt="Geeky Logo"
              ></img>
            </a>
          </div>

          <div className="hidden md:flex flex-row gap-5">
            <div className="flex flex-row gap-8 w-[487px] h-14 justify-center items-center">
              <select name="" id="">
                <option value="" className="gap-4">
                  <a href="/">Resources</a>
                </option>
              </select>
              <a href="/">Success stories</a>
              <select name="" id="">
                <option value="" className="gap-4">
                  <a href="/">Company</a>
                </option>
              </select>
              <a href="/">Pricing</a>
            </div>

            <div className="flex flex-row gap-4 justify-center items-center">
              <Button
                text="Login"
                variant="secondary"
                className="max-w-[84px] max-h-[44]"
              />
              <Button
                text="Create free account"
                variant="primary"
                className=""
              />
            </div>
          </div>

                    <button
            className="md:hidden text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FaTimes /> : <FaBars />}
          </button>

        {openMenu && (
          <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm">
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setOpenMenu(false)}
            >
              <FaTimes />
            </button>
            <div className="flex flex-col gap-6 items-center text-white text-xl">
              <a href="/" onClick={() => setOpenMenu(false)}>Resources</a>
              <a href="/" onClick={() => setOpenMenu(false)}>Success stories</a>
              <a href="/" onClick={() => setOpenMenu(false)}>Company</a>
              <a href="/" onClick={() => setOpenMenu(false)}>Pricing</a>
              <Button
                text="Login"
                variant="secondary"
                className="text-[16px]"    
              />
              <Button
                text="Create free account"
                variant="primary"
                className="text-[16px]"
              />
            </div>
          </div>
        )}

        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
