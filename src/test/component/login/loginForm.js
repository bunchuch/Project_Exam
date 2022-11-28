import React from "react"

const Header = (props) => {
    return <>
    <h1 class="text-xl leading-tight mb-2 tracking-tight
     text-gray-900 md:text-2xl dark:text-white">
    {props.text}</h1>
    <p>{props.text2}</p>
    </>
}

const InputLable = (props) =>{
    return  <label for={props.for} 
    class="block mb-2 text-sm font-medium text-gray-900
     dark:text-white">
        {props.text}</label>
}

const InputBox = (props)=>{
    return <input type={props.type} 
    name={props.name} id="email" 
    className="inputBox" placeholder={props.placeholder} 
    required=""/>
}


const FormLogin = () =>{
    return  <form class="space-y-4 md:space-y-6 my-6" action="#">
    <div>
        <InputLable for="username" text="Username"></InputLable>
        <InputBox placeholder="Username" type="email"></InputBox>
    </div>
    <div>
       <InputLable for="password" text="Password"></InputLable>
       <InputBox placeholder="password" type="password"></InputBox>
    </div>
    <div className="mt-2"></div>
    <button type="submit" class="btn-login">Sign in</button>
    <p class="paraStyle">
     <a href="#" class="atagstyle"> Get Help with Signing In</a>
    </p>
</form>
}

const Paragram = (props) =>{
    return <>
    <p>{props.text}</p>
    </>
}

const Footerdescription = (props)=>{
    return <span className="flex mt-10 space-x-4 text-gray-400">
        <Paragram text={props.privacy}></Paragram>
        <Paragram text={props.security}></Paragram>
        <Paragram text={props.contact}></Paragram>
    </span>
}


const LoginForm = () =>{
    return <section class="loginSection bg-white">
    <div className="lginContainer">
        <div class="loginBackgroundContainer">
            <div class="p-6 space-y-1 md:space-y-3 m-10 bg-white sm:p-8 border-[1px] rounded-md">
                <Header text="Sign In" text2="Enter you Personal Account"></Header>
                <div className="mt-10">
                <FormLogin></FormLogin>
                </div>
            </div>
        </div>
   <Footerdescription privacy="Term Privacy" security="security" contact="contact us"></Footerdescription>
    </div>
  </section>
}


export default LoginForm