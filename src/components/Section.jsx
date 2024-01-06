import React, { useState } from "react";

const Section = () => {
  const [data, setData] = useState(true);
  function dark() {
    setData(!data);
  }
  return (
    <div>
      <div className={data ? " bg-black" : " bg-white"}>
        <div className="container max-w-[1320px] px-3 mx-auto">
          <button
            onClick={dark}
            className="text-white bg-red-300 border-2 border-blue-500"
          >
            {data ? " Light" : " Dark"}
          </button>
          <h2
            className={`${
              data ? "text-red-600" : " text-green-400"
            } font-bold   text-[45px] text-center py-5`}
          >
            Section
          </h2>
          <div className="flex flex-row flex-wrap -mx-3">
            <div className="w-6/12 px-3">
              <h3
                className={`${
                  data ? "text-red-600" : " text-green-400"
                } font-bold   text-[45px] text-center py-5`}
              >
                Hello world
              </h3>
              <p
                className={`${
                  data ? "text-red-600" : " text-green-400"
                } font-bold  text-[45px] text-center py-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et
                alias rem fugit sunt molestias, at aliquid quidem repudiandae
                natus maiores debitis optio quos consectetur adipisci numquam id
                rerum dolorum corrupti dolore! Non, similique explicabo
                veritatis corporis rem doloremque ea?
              </p>
            </div>
            <div className="w-6/12 px-3">
              <h3
                className={`${
                  data ? "text-blue-600" : " text-green-500"
                } font-bold  text-[45px] text-center py-5`}
              >
                Hello world
              </h3>
              <p
                className={`${
                  data ? "text-green-400" : " text-red-500"
                } font-bold   text-[45px] text-center py-5`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et
                alias rem fugit sunt molestias, at aliquid quidem repudiandae
                natus maiores debitis optio quos consectetur adipisci numquam id
                rerum dolorum corrupti dolore! Non, similique explicabo
                veritatis corporis rem doloremque ea?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
