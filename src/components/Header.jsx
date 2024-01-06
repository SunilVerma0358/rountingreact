import React from "react";
import Img from "../assets/image/Group 35412.png";

const Header = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="container max-w-[1320px] mx-auto px-3 ">
        <div className="flex flex-row flex-wrap -mx-3 items-end">
          <div className="w-6/12 px-3">
            <div className="flex justify-center">
              <img className=" animate-rotateBottal" src={Img} alt="img" />
            </div>
          </div>
          <div className="w-6/12 px-3">
            <span>
              <svg
                className="rotateglass"
                width="116"
                height="383"
                viewBox="0 0 116 383"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.623047"
                  y="0.249268"
                  width="114.357"
                  height="382.686"
                  fill="url(#pattern0)"
                />
                <path
                  d="M7.11328 173.506C12.3978 175.96 27.6097 179.621 43.9162 174.639C64.2994 168.411 74.491 157.653 86.3812 163.881C95.8933 168.864 104.877 171.619 107.897 172.374C107.897 172.374 102.801 194.456 94.308 206.346C83.3891 221.632 73.9248 236.125 58.6374 238.053C53.2202 238.736 49.1189 237.544 45.6509 235.222L24.0993 210.875C11.0767 193.89 7.11328 173.506 7.11328 173.506Z"
                  fill="#D83737"
                />
                <g style={{ mixBlendMode: "multiply" }}>
                  <rect
                    x="0.884766"
                    y="0.249268"
                    width="114.357"
                    height="382.686"
                    fill="url(#pattern1)"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_0_175"
                      transform="scale(0.000816993 0.000244141)"
                    />
                  </pattern>
                  <pattern
                    id="pattern1"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_0_175"
                      transform="scale(0.000816993 0.000244141)"
                    />
                  </pattern>
                  <image
                    id="image0_0_175"
                    width="1224"
                    height="4096"
                  />
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;