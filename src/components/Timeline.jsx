import React from "react";

const Timeline = () => {
  return (
    <div>
      <div className="h-screen bg-yellow-300 flex justify-center items-center flex-col">
        <h2 className="font-bold text-white pb-5">Hello </h2>
        <div className="flex  gap-6 flex-col">
          <button className="rounded-lg border-2 border-black hover:bg-yellow-600  text-white font-bold px-4 py-3 ">
            Yellow
          </button>
          <button className="rounded-lg border-2 border-black  hover:bg-green-400 text-white font-bold px-4 py-3 ">
            Green
          </button>
          <button className="rounded-lg border-2 border-black hover:bg-pink-300  text-white font-bold px-4 py-3 ">
            Pink
          </button>
          <button className="rounded-lg border-2 border-black hover:bg-red-400  text-white font-bold px-4 py-3 ">
            Red
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
