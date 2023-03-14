
import React, { useState } from "react";
import { BiCircle,BiX } from "react-icons/bi";
import Icon from "./Icon";


const Modal = ({description,children,info,text,event}) => {
    const [showModal, setShowModal] = useState(false);
   
    return (
      <>
        <button
          className="rounded relative inline-flex group items-center
          justify-center md:px-4 px-2 md:w-32 py-2 m-1 cursor-pointer border-b-4 border-l-2
           active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr
            from-green-400 to-green-500 border-green-600 text-white"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <span class="absolute w-0 h-0  bg-white rounded-full 
group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span class="relative">{text}</span>
        </button>
        {showModal ? (
          <>
            <div className="flex justify-center md:mx-0 mx-10 items-center overflow-x-hidden
             overflow-y-auto fixed left-0 right-0 top-[10rem] z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4 mx-auto max-w-3xl">
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full
               bg-white outline-none focus:outline-none">
              <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button 
            onClick={()=>setShowModal(false)}
            type="button" className="absolute top-3 right-2.5 text-gray-400
             bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
             text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800
              dark:hover:text-white" data-modal-hide="popup-modal">
                <div className="w-4 h-4">
                  <Icon name={<BiX/>} Size="1.2rem" color="purple"/>
                </div>
            </button>
            <div className="p-6">
                <div className="">
                  {children}
                </div>
                 {
                  info ? (
                    <>

                    </>
                  ):(
                    <div className="flex items-center justify-center mt-4">
                      <button onClick={event}
                type="button" className="rounded relative inline-flex group items-center
                justify-center md:px-4 px-2 md:w-32 py-2 m-1 cursor-pointer border-b-4 border-l-2
                 active:border-blue-500 active:shadow-none shadow-lg bg-gradient-to-tr
                  from-blue-400 to-blue-500 border-blue-600 text-white">
                    Yes, I'm sure
                </button>
                <button onClick={()=>setShowModal(false)} data-modal-hide="popup-modal" type="button" 
                className="rounded relative inline-flex group items-center
                justify-center md:px-4 px-2 md:w-32 py-2 m-1 cursor-pointer border-b-4 border-l-2
                 active:border-red-600 active:shadow-none shadow-lg bg-gradient-to-tr
                  from-red-400 to-red-500 border-red-600 text-white">No, cancel</button>
                    </div>
                  )
                 }
              
            </div>
        </div>
    </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  };
  
  export default Modal;
  