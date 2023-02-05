import React from "react";







export const Input =  ({id,Text, type ,event,name,value,checked, ref }) => {
    return <div >
    {    type  === "input"  ?   <div>
                            <label htmlFor="Username"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                              {Text}</label>
                            < input type="text" onChange={event}
                            ref={ref}
                                value={value}
                                name="username" id="username"
                                className="ext-gray-900 rounded-md  border-gray-200 border-[1px] 
                            text-sm block w-full py-2 text-[14px] font-normal md:py-3  px-2
                                 tracking-wider"
                                required="" />
                                {/* {formErrors.username && 
                                <p className="text-red-500 text-[12px] py-2 font-medium line-none">
                                    {formErrors.username}</p>} */}
                        </div> :     
          <div className="flex justify-center items-center ">
          <input id="default-checkbox" type={type === "checkbox" ? "checkbox" : "radio"}
           value={value}
           
           onChange={event}
            className={styleGroupInput.inputStyle}/>
          <label htmlFor=""  className="mx-5 font-sans tracking-wider text-[16px] text-gray-800">{Text}</label>
      </div>       
      }    
    </div>
 }

 const styleGroupInput = {
  "main": "flex items-center space-x-5 cursor-pointer w-full bg-gray-50 my-3 relative p-5 overflow-y-auto rounded-xl shadow-md shadow-gray-200/10",
  "inputStyle": "w-5 h-5 accent-purple-800 text-purple-700 bg-gray-100 border-gray-300 rounded"
  +"focus:ring-purple-700 focus:ring-2",
  "label-style": " ml-2  md:text-[16px] text-[14px] text-gray-900 indent-4 hover:text-gray-500",
}