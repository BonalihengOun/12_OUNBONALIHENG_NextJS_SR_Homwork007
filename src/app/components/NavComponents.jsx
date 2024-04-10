import React from "react";
import Link from "next/link";
const NavComponents = () => {
  return (
    <div className=" navbar flex sticky top-0  items-center w-full h-20 justify-between z-10">
      <div className="ml-20">
       <Link href="/">
       <img
          src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
          alt=""
        />
       </Link>
      
      </div>
      <div className="flex-none gap-2 mr-20">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
      
            <li>
              <a href="/"  className="text-slate-50 font-bold">Home</a>
            </li>
      

            <li>
              <a  href="/#popular" className="text-slate-50 font-bold">Popular</a>
            </li>
         
       
            <li>
              <a  href="/#Drama" className="text-slate-50 font-bold">Romance</a>
            </li>

          
            <li>
              <a href="/#anime" className="text-slate-50 font-bold">Anime</a>
            </li>

          </ul>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Type to search..."
            className="input input-bordered w-[250px] bg-slate-50"
          />
        </div>
      </div>
    </div>
  );
};

export default NavComponents;
