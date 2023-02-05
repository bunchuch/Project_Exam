import React, { useEffect, useState,useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import "../../style/style.css"
import Cookies from "universal-cookie"
import { useDispatch } from "react-redux"
import { authAction } from "../../redux/authSlice"
import { Input , message} from "antd"
import { login } from "../../api/user"
import { loadingAction } from "../../redux/loaderSlice"


const cookie = new Cookies

const LoginForm = () => {
    const inputRef = useRef(null)
    const navigator = useNavigate()
    const {name} = useParams()

    const [username , setUsername] = useState()
    const [password ,setPassword] = useState()
    const [type ,setType] = useState(false)
    const [erorr, setError] = useState(false)
    const [loader ,setLoader] = useState(false)
    const dispatch = useDispatch()
    const [messageApi ,contextHolder] = message.useMessage()
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            dispatch(loadingAction.ShowLoading())
            const response = await login({
                name : username,
                password : password
            })  
            
            if (response.token !== undefined){ 
               cookie.set('TOKEN', response?.token, {
                path : '/'
               })
               cookie.set('Username', response.name)
                window.location.href = "/dashboard"
                dispatch(loadingAction.HideLoading())
            }else{
                setTimeout(()=>{
                    messageApi.open({
                        key : 'updatable',
                        type : 'error',
                        content : `user not exist`
                    })
                }, [1000])
                
            }
            
            dispatch(loadingAction.HideLoading())

        } catch (error) {
            messageApi.open({
                key : 'updatable',
                type : 'error',
                content : `Invaild Credentails ${error}`
            })
            setError(true)
            dispatch(loadingAction.HideLoading())
            
        }
    }

return <section className="bg-neutral-50   inset-0 font-sans">
    {contextHolder}
        <div className="flex items-center justify-center 
         h-screen">
            <div className="w-full  md:mx-auto md:max-w-[22rem] max-w-full
            rounded-lg md:shadow-sm  shadow-neutral-200 md:bg-white md:border-[1px]
             border-neutral-50   ">{ 
                <div> 
                  <div className=" space-y-1 md:space-y-3  my-2 p-2 md:p-6 text-gray-700 
                 ">
                {
                    username ? (
                        <>
                            <h1 className="text-xl font-sans
                            font-medium leading-tight tracking-tight md:text-2xl  ">
                                {
                                    `${type ? "Greeting" : "Hello"} ! ${username}`}</h1>
                            <p className="">{type ? "How are doing?👋🏻"
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
                    <form onSubmit={(e)=>handleSubmit(e)}
                    className="space-y-4 md:space-y-4 my-4 " action="#">
                        <label htmlFor="Username"
                                className="block text-sm font-medium text-gray-900 ">
                              Username</label>
                       <Input 
                       className="py-3" 
                        ref={inputRef} type={null} 
                        onChange={e => setUsername(e.target.value)}></Input>
                        <label htmlFor="Username"
                                className="block mb-2 text-sm font-medium text-gray-900 ">
                             Password</label>
                             <Input.Password  className="py-3"
                             onChange={e => setPassword(e.target.value)}/>
                        <div className="mt-5">
                          {erorr ? <p className="text-sm font-medium text-red-500">Invaild credentails</p> : null}
                        </div>
                        <input type="submit" value="Login"
                        className="w-full bg-[#0f3460]  text-white rounded-md
                                    focus:ring-4 focus:outline-none 
                                    font-medium text-sm px-5 py-3  md:text-[16px] text-center"/>
                                    
                        <p className="text-center">
                            <Link to={"/login/reset-account"}>
                            <a 
                            className="font-thin-[200px] hover:text-purple-900 text-[14px]
                             text-variation-500 hover:text-variation-400"> Get Help with Signing In</a>
                            </Link>
                           
                        </p>
                    </form>
                </div>
             
            </div>
        
            </div>
            
            }
                         
            </div>
        </div>
    </section>
}


export default LoginForm