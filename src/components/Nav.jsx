import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import image from "../assets/logo.png";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Profesional
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Service
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">
          About
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center" style={{ color: "red" }}>
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="sticky top-0 z-10 bg-white h-16 px-4 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img className='w-25 h-14' src={image} alt="logo" /> 
          </Typography>

          <div className="flex items-center gap-4 lg:hidden">
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={toggleNav}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>

          <MobileNav open={openNav}>
            <div className="flex flex-col items-start gap-4 mt-2">
              {navList}
              <div className="flex flex-col items-start gap-2">
                <Button variant="text" size="sm">
                  <span>Log In</span>
                </Button>
                <Button variant="gradient" size="sm">
                  <span>Sign in</span>
                </Button>
              </div>
            </div>
          </MobileNav>
          
          <div className="hidden lg:flex items-center gap-4">
            {navList}
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm">
                <span>Log In</span>
              </Button>
              <Button variant="gradient" size="sm">
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}







const Nav = () => {
  return <StickyNavbar />;


}

export default Nav;
