
import React, { useState } from "react";
import { BiCircle,BiX } from "react-icons/bi";
import Icon from "./Icon";


const Modal = ({showModals, description,children,info,text,event ,size }) => {
    const [showModal, setShowModal] = useState(false);
   
const handleSize = (size) => {
  if (size === "large"){
    return "max-w-5xl"
  }else if (size === "meduim"){
    return "max-w-4xl"

  }else {
    return "max-w-xl"
  }
}



    return (
      <>{
        showModals ? 
        <button
        className="rounded border-1  inline-flex group items-center
        hover:border-purple-200
        justify-center px-4  py-2 m-1 cursor-pointer bg-gray-100 text-gray-600
         active:bg-gray-200 active:shadow-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span className=" w-0 h-0  bg-white rounded-full 
       opacity-10"></span>
      <span className="">{text}</span>
      </button>
        : <></>
      }
      
        {showModal ? (
          <>

            <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden
             overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full
                            flex justify-center items-cente outline-none focus:outline-none">
            <div className="relative w-auto md:my-4 top-10 md:mx-auto mx-4">
              <div className="rounded  relative flex flex-col w-full
               bg-white outline-none focus:outline-none">
              <div className={`relative w-full h-full ${handleSize(size)} md:h-auto`}>
        <div className="relative ">
            <button 
            onClick={()=>setShowModal(false)}
            type="button" className="absolute md:top-3 right-4  md:right-2.5 text-gray-400
             bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg bg-purple-100 
             text-sm p-1.5 ml-auto inline-flex items-center
            " data-modal-hide="popup-modal">
                <div className="w-4 h-4 flex justify-center items-center">
                  <Icon name={<BiX/>} Size="1.2rem" color="purple"/>
                </div>
            </button>
            <div className="p-4">
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
  