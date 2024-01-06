import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavPage = (props) => {
  const location = useLocation();
  return (
    <div className={` bg-black ${props.fas} `}>
      <div className="container max-w-[1320px] px-3 mx-auto ">
        <div className="flex justify-between items-center py-3">
          <h3 className="font-bold text-white ">Logo</h3>
          <ul className="flex items-center gap-7">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "font-bold text-green-500 "
                    : "font-normal text-white"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={
                  location.pathname === "/About"
                    ? "font-bold text-green-500 "
                    : "font-normal text-white"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Blog"
                className={
                  location.pathname === "/Blog"
                    ? "font-bold text-green-500 "
                    : "font-normal text-white"
                }
              >
                Blog
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="text-white">
                {props.faq}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavPage;
