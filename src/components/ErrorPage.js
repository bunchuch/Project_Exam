import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import {styleError404} from "../style/style"



export default function ErrorPage(){
	document.title = "Error 404"
  let navigator = useNavigate()
    return <section className={styleError404.main}>
	<div className={styleError404.container}>
		<div className={styleError404.tag3}>
			<h2 className={styleError404.header}>
				<img className="w-80 object-contain rounded-lg" src="https://cdn.dribbble.com/users/595978/screenshots/3603965/dribbble.gif"/>
			</h2>
			<p className={styleError404.paragrh}>Sorry, we couldn't find this page.</p>
			<p className={styleError404.paragrah2}>But dont worry,
			you can find plenty of other things on our homepage.</p>
			<a onClick={()=>{
				document.title="Exam app"
				navigator("/")
			}} rel="noopener noreferrer" href="#"
			 className={styleError404.atag}>Back to homepage</a>
		</div>
	</div>
</section>
}