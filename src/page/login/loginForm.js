import React, { useEffect, useState } from "react"
// import axios from axios;
import {omit} from "lodash"
import { validateForm } from "./vailidate"
import SmallFooter from "../../components/Footer/smallFooter"
import { useDispatch } from "react-redux"
import { questionAction } from "../../redux/questionSlice"
import { authAction } from "../../redux/authSlice"
import { useNavigate } from "react-router-dom"


const LoginForm = () => {

    const dispatch  = useDispatch()
    const [color, setColor] = useState('gray')
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
            navigator("/home")
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

    return <section className="Section_login_oneStyle_1">
        <div className="loginform_Styletwo_2">
            <div className="loginform_stylethree_3 ">
                <div className="loginform_style_line_left_4"></div>
                <div className="loginform_style_line_right_5"></div>
                <div className="loginform_main_style_box_6 ">
                    {
                        user.username ? (
                            <>
                                <h1 className="loginform_header_style_box_7">
                                    {
                                        `Hi ! ${user.username}`}</h1>
                                <p className="loginform_paragraph_style_box_8">Nice to meet you 😎</p>
                            </>
                        ) : (
                            <>
                                <h1 className="loginform_header_style_box_7">
                                    Log In   </h1>
                                <p className="loginform_paragraph_style_box_8">Enter your Personal Account</p>
                            </>
                        )
                    }
                    <div className="mt-10">
                        <form onSubmit={handleOnsubmit} className="loginform_form_style_box_9" action="#">
                            {/* username input area */}
                            <div>
                                <label htmlFor="Username"
                                    className="loginform_lable_style_box_10">
                                    Username</label>
                                < input type="text" onChange={handleChange}
                                    value={user.username || ""}
                                    name="username" id="username"
                                    className="loginform_input_style_box_12"
                                    required="" />
                                    {formErrors.username && 
                                    <p className="text-red-500 text-[12px] py-2 font-medium line-none">
                                        {formErrors.username}</p>}

                            </div>
                            {/* passowrd input area */}
                            <div>
                                <label htmlFor="Username"
                                    className="loginform_lable_style_box_10">
                                    Password</label>
                                <input type="password"
                                    onChange={handleChange}
                                    name="password"
                                    value={user.password || ""}
                                    className="loginform_input_style_box_12"
                                    required="" />
                                {
                                  formErrors.password && <p className="text-red-500 text-[12px] py-2 font-medium line-none">
                                    {formErrors.password}</p>
                                }
                            </div>
                            <p className="loginform_error_paragraph_style_box_11 font-medium text-[12px] text-blue-900">
                                <a href="#" className="atagstyle">I am a teacher</a>
                            </p>
                            <button type="submit" className="loginform_button_style_box_13">Log in</button>

                            <p className="paraStyle text-center">
                                <a href="#" className="atagstyle"> Get Help with Signing In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
            <SmallFooter></SmallFooter>
            </div>
          
        </div>
    </section>
}


export default LoginForm