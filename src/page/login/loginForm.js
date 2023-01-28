import React, { useEffect, useState } from "react"
// import axios from axios;
import {omit} from "lodash"
import { validateForm } from "./vailidate"
import SmallFooter from "../../components/Footer/smallFooter"


const LoginForm = ({setNavbar}) => {

    useEffect(()=>{
        setNavbar(true)
    },[])

 

    const [color, setColor] = useState('gray')
    const [isSumbit, setIsSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const [user, setUserDetails] = useState({
        username: '',
        password: ''
    })



 

    const validate = (event,name,value)=>{
        switch (name) {
            case 'username':
                if(!value){
                    setFormErrors(
                       { ...formErrors,username:"username invaild"}
                    )
                }else{
                    let newObj = omit(formErrors,"username")
                    setFormErrors(newObj)
                }
                break;
                case 'password':
                    if(!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)){
                        setFormErrors({
                            ...formErrors, password:"passowrd invaild"
                        })
                    }else{
                        let newObj = omit(formErrors,"password")
                        setFormErrors(newObj)
                    }
                    break;
                    default:
                    break;
        }
    }

    const handleOnchange = (event) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setUserDetails(values => ({
            ...user,
            [name]: value
        }
        ))

        validate(name,event,value)
    }

    const handleOnsubmit = (event) => {

        
        if(event) event.preventDefault()
        setFormErrors(validateForm(user))
        
        if(Object.keys(formErrors).length === 0 && Object.keys(user).length !=0){
            alert("hello world")
        }else{
            alert("There is an Error")
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
                                < input type="text" onChange={handleOnchange}
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
                                    onChange={handleOnchange}
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