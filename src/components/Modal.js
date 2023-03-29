
import React, { useState } from "react";
import { BiCircle,BiX } from "react-icons/bi";
import Icon from "./Icon";


const Modal = ({description,children,info,text,event}) => {
    const [showModal, setShowModal] = useState(false);
   
    return (
      <>
        <button
          className="rounded relative shadow-md inline-flex group items-center
          hover:border-purple-200
          justify-center px-4 md:w-32 py-2 m-1 cursor-pointer bg-green-500 text-white
           active:bg-green-600 active:shadow-none"
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
              <div className="rounded  relative flex flex-col w-full
               bg-white outline-none focus:outline-none">
              <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative dark:bg-gray-700">
            <button 
            onClick={()=>setShowModal(false)}
            type="button" className="absolute md:top-3 right-4  md:right-2.5 text-gray-400
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
                 hover:border-purple-200
                 justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-800 text-white
                  active:bg-purple-600 active:shadow-none
                ">
                    Yes, I'm sure
                </button>
                <button onClick={()=>setTimeout(()=>{
                      setShowModal(false)
                },[200])} data-modal-hide="popup-modal" type="button" 
                className="rounded relative inline-flex group items-center
                hover:border-purple-200
                 justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-100 text-purple-800
                  active:bg-purple-200 active:shadow-none">No, cancel</button>
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
  