import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { authAction } from "../../redux/authSlice"
import { useNavigate } from "react-router-dom"
import Icon from "../../components/Icon"
import {FcPortraitMode} from "react-icons/fc"

const LoginForm = () => {

    const dispatch  = useDispatch()
    const [Type ,setType] = useState(false)
    const [help ,setHelp] = useState(false)
    const [isSumbit, setIsSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const [user, setUserDetails] = useState({
        username: '',
        password: ''
    })




const navigator = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails(values => ({...values, [name]: value}))
      }
    

    const handleOnsubmit = (event) => {
          dispatch(authAction.login({
            username:user.username,
            password:user.password,
          }))
          if(dispatch(authAction.login)){
            navigator("/exam")
          }else{
            navigator("/login")
          }
     
    }

    //check login form and return new page if vailidation is successful
    //use axios http library to return
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSumbit) {
            console.log(user)
            // axios.post('https:')

        }
    }, [formErrors])

    return <section className="bg-gray-50 relative inset-0">
        <div className="flex flex-col items-center justify-center mx-auto h-screen md:h-screen lg:py-0">
            <div className="w-full md:mt-0 sm:max-w-md xl:p-0 relative">{ 
                help ? <div className="p-6 space-y-1 md:space-y-3 flex flex-col items-center my-5 md:mx-10
                 text-gray-700  md:p-8 rounded text-center bg-gray-50 px-0 xl:py-0">
                      <h1 className=" text-xl font-medium leading-tight mb-2 tracking-tight md:text-2xl  ">
                    <Icon Size="2rem" name={<FcPortraitMode/>}></Icon>
                      </h1>
                    <h1 className=" text-xl font-medium leading-tight mb-2 tracking-tight md:text-2xl  ">Welcome</h1>
               <p className=" font-normal">Contact your curator to recover your password </p> 
               <p className="paraStyle text-center">
                            <a onClick={()=> setHelp(false)} href=""
                             className="font-thin-[150px] hover:text-purple-900 text-purple-800">I remember the password back</a>
                        </p>
                </div> :   <div className="p-6 space-y-1 md:space-y-3  my-5 md:mx-10 text-gray-700 
               mx-5 bg-white md:p-8 rounded ">
                
                {
                    user.username ? (
                        <>
                            <h1 className="text-xl font-medium leading-tight mb-2 tracking-tight md:text-2xl  ">
                                {
                                    `${Type ? "Greeting" : "Hello"} ! ${user.username}`}</h1>
                            <p className="loginform_paragraph_style_box_8">{Type ? "How are doing?👋🏻" :"Nice to meet you 😎"}</p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-xl font-medium leading-tight mb-2 tracking-tight md:text-2xl  ">
                                Log In   </h1>
                            <p className="loginform_paragraph_style_box_8">Enter your Personal Account</p>
                        </>
                    )
                }
                <div className="">
                    <form onSubmit={handleOnsubmit} className="space-y-4 md:space-y-6 my-6 " action="#">
                        {/* username input area */}
                        <div>
                            <label htmlFor="Username"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Username</label>
                            < input type="text" onChange={handleChange}
                                value={user.username || ""}
                                name="username" id="username"
                                className="ext-gray-900 rounded-[4px]  border-gray-200 border-[1px] 
                            text-sm block w-full py-2 text-[14px] font-normal md:py-3  px-2
                                 tracking-wider"
                                required="" />
                                {formErrors.username && 
                                <p className="text-red-500 text-[12px] py-2 font-medium line-none">
                                    {formErrors.username}</p>}

                        </div>
                        {/* passowrd input area */}
                        <div>
                            <label htmlFor="Username"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Password</label>
                            <input type="password"
                                onChange={handleChange}
                                name="password"
                                value={user.password || ""}
                                className="text-gray-900 rounded-[4px]  border-gray-200 border-[1px] 
                                text-sm block w-full py-2 text-[14px] font-normal md:py-3 px-2 tracking-wider"
                                required="" />
                            {
                              formErrors.password && <p className="text-red-500 text-[12px] py-2 font-medium line-none">
                                {formErrors.password}</p>
                            }
                        </div>
                        <p className="text-[12px] text-blue-700 ">
                            <a href="#" onClick={()=> setType(!Type)} className="text-purple-900">{
                            Type
                             ? "I am a student" 
                             : "I am a teacher"}
                            </a>
                        </p>
                        <button type="submit" className="w-full bg-purple-800 rounded
         text-white  focus:ring-4 focus:outline-none 
         font-medium text-sm px-5 py-3 text-center ">Log in</button>

                        <p className="paraStyle text-center">
                            <a onClick={()=> setHelp(true)} href="#" 
                            className="font-thin-[150px] hover:text-purple-900 text-[14px]
                             text-purple-700"> Get Help with Signing In</a>
                        </p>
                    </form>
                </div>
              
            </div>
            }
              
                
            </div>
        </div>
    </section>
}


export default LoginForm