import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineClose } from "react-icons/ai";
import {CgFacebook} from "react-icons/cg"
import {GrTwitter} from "react-icons/gr"
import {RiInstagramFill} from "react-icons/ri"
const Sidebar = (props) => {
  return (
   
    <div className="w-2/5 border-solid border-2 px-4 overflow-y-scroll absolute top-0 z-10">
      <div className="flex justify-between py-4">
        <div>
          <img src="/images/logo.jpg" className="w-16"></img>
        </div>
        <div className="flex text-3xl col-span-7">
<div className="cursor-pointer"><AiOutlineSearch /></div>

<div className="cursor-pointer px-2" onClick={props.sidebarfun}><AiOutlineClose /></div>
      </div>
    </div>
    <div className="flex justify-between pt-3 pb-5">
      <div className="flex flex-col space-y-3">
        <a href="#" className="text-xs font-semibold">NEWS</a>
        <a href="#" className="text-xs font-semibold">DISPATCHES</a>
        <a href="#" className="text-xs font-semibold">24 HOURS</a>
        <a href="#" className="text-xs font-semibold">BOOK CLUB</a>
        <a href="#" className="text-xs font-semibold">CLIMATE DESK</a>
        <a href="#" className="text-xs font-semibold">A PERSONAL NOTE</a>
      </div>
      <div className="flex flex-col space-y-3">
        <a href="#" className="text-xs font-semibold">OPINION</a>
        <a href="#" className="text-xs font-semibold">FOOD FOR THOUGHT</a>
        <a href="#" className="text-xs font-semibold">WILDLIFE</a>
        <a href="#" className="text-xs font-semibold">ACTIVE</a>
        <a href="#" className="text-xs font-semibold">PROFILES</a>
        <a href="#" className="text-xs font-semibold">THINGS I'VE LEARNED</a>
      </div>
      <div className="flex flex-col space-y-3">
        <a href="#" className="text-xs font-semibold">PHOTOGRAPHY</a>
        <a href="#" className="text-xs font-semibold">BEVERAGE DEPT.</a>
        <a href="#" className="text-xs font-semibold">ROAD TRIPS</a>
        <a href="#" className="text-xs font-semibold">RIDING THE RAILS</a>
        <a href="#" className="text-xs font-semibold">THE FUTURE OF TRAVEL</a>
      </div>
    </div>
    <hr className="mb-5"></hr>
    <div className="w-3/5">
      <p className="text-5xl font-semibold">About Us
Contributors
Contact
Newsletter
Pay it Forward
Sustainability</p>
    </div>
<div className="py-8 flex">
  <div className="w-9/12">
    <img className="w-36" src="/images/amazon.jpg"></img>
    <p className="text-xss pt-2">Privacy Policy<br></br> Copyright © 2023 Adventure.com | Copyright © 2023 Adventure.com, LLC</p>
  </div>
  <div className="flex space-x-3 justify-end text-xl align-bottom items-end ml-4">
    <CgFacebook></CgFacebook>
    <GrTwitter></GrTwitter>
    <RiInstagramFill></RiInstagramFill>
  </div>
</div>



    </div>
  )
};

export default Sidebar;
