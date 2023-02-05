import React, { useEffect, useState,useRef } from "react"
import { useDispatch } from "react-redux"
import { authAction } from "../../redux/authSlice"
import { Link, useNavigate } from "react-router-dom"
import Icon from "../../components/Icon"
import {FcPortraitMode} from "react-icons/fc"
import "../../style/style.css"







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

const inputRef = useRef(null)



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

    return <section className="bg-gray-50 bg-login relative inset-0 font-sans">
        <div className="flex flex-col items-center justify-center 
         h-screen">
            <div className="w-full md:mx-auto max-w-[23rem] 
            rounded-xl shadow-md mx-3 shadow-gray-100 bg-white border-[1px] border-gray-200   ">{ 
                <div> 
                  <div className=" space-y-1 md:space-y-3  my-2 p-2 md:p-6 text-gray-700 
                 ">
                {
                    user.username ? (
                        <>
                            <h1 className="text-xl font-sans
                            font-medium leading-tight tracking-tight md:text-2xl  ">
                                {
                                    `${Type ? "Greeting" : "Hello"} ! ${user.username}`}</h1>
                            <p className="loginform_paragraph_style_box_8 font-sans">{Type ? "How are doing?👋🏻"
                            :"Nice to meet you 😎"}</p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-xl font-medium font-sans
                            leading-tight mb-2 mx-4 md:mx-2 tracking-tight md:text-2xl  ">
                                Log In   </h1>
                            <p className="font-sans   mx-4 md:mx-2 ">
                                Enter your Personal Account
                                </p>
                        </>
                    )
                }
                <div className="md:px-2 px-4">
                    <form onSubmit={handleOnsubmit} 
                    className="space-y-4 md:space-y-4 my-4 " action="#">
                        {/* username input area */}
                        <div>
                            <label htmlFor="Username"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                                Username</label>
                            < input type="text" onChange={handleChange}
                            ref={inputRef}
                                value={user.username || ""}
                                name="username" id="username"
                                className="ext-gray-900 rounded-md  border-gray-200 border-[1px] 
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
                            <input
                                ref={inputRef} 
                                type="password"
                                onChange={handleChange}
                                name="password"
                                value={user.password || ""}
                                className="text-gray-900 rounded-md  border-gray-200 border-[1px] 
                                text-sm block w-full py-2 text-[14px] font-normal md:py-3 px-2 tracking-wider"
                                required="" />
                            {
                              formErrors.password && 
                              <p className="text-red-500 text-[12px] py-2 font-medium line-none">
                                {formErrors.password}</p>
                            }
                        </div>
                        <div className="mt-5"></div>
                        <button type="submit" 
                        className="w-full bg-yellow-400  text-slate-800 rounded-md
                                    focus:ring-4 focus:outline-none 
                                    font-medium text-sm px-5 py-3  md:text-[16px] text-center">
                                        Log In</button>

                        <p className="text-center">
                            <Link to={"/login/reset-account"}>
                            <a onClick={()=> setHelp(true)} href="#" 
                            className="font-thin-[200px] hover:text-purple-900 text-[14px]
                             text-yellow-500"> Get Help with Signing In</a>
                            </Link>
                           
                        </p>
                    </form>
                </div>
             
            </div>
            <div 
            className="login-section-bg object-fill rounded-br-xl
             rounded-bl-xl bg-purple-800 py-2 w-full">

</div>
            </div>
            
            }
                         
            </div>
            
        </div>
    </section>
}


export default LoginForm