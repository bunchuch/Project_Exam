import Icon from "../../components/Icon"
import { useEffect } from "react"
import {HiOutlineMail} from "react-icons/hi"
import {TfiMapAlt} from "react-icons/tfi"
import {BiPhoneCall} from "react-icons/bi"
import {FiFacebook} from "react-icons/fi"
import { contact } from "../../data/data"
import {RiTelegramLine} from "react-icons/ri"
import Footer from "../../components/Footer/Footer"
import "../../style/style.css"
import { Card } from "../../components/Card"
import Heropage from "../../components/Herosection/Hero"
import {FcMindMap, FcPhone, FcServices, FcSms} from "react-icons/fc"

export default function Contact () {
   

    return (
        <section data-aos="fade-in"  className="bg-white dark:bg-gray-900">
          <Heropage img="contact-hero"></Heropage>
        <div className="container mx-auto  px-6 py-12 mt-10 font-sans">
            <div className="">    
                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
            </div>
              <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-purple-800 rounded-full"></span>
                    <span className="inline-block w-3 h-1 ml-1 bg-red-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                </div>
            <div className="grid grid-cols-1 gap-12 mt-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
              {
                contact.map((i=><>
                { i.Email.map((x)=><Card title={x.title} desc={x.desc} icons={<FcSms/>} chilren={x.contact}/>) }
                { i.Office.map((x)=><Card title={x.title} desc={x.desc} icons={<FcMindMap/>} chilren={x.contact}/>) }
                { i.Phone.map((x)=><Card title={x.title} desc={x.desc} icons={<FcPhone/>} chilren={x.contact}/>) }
                { i.Phone.map((x)=><Card title={x.title} desc={x.desc} icons={<FcSms/>} chilren={x.contact}/>) }
                { i.Phone.map((x)=><Card title={x.title} desc={x.desc} icons={<FcSms/>} chilren={x.contact}/>) }
               
                </>))
              }
            </div>
        </div>
       
    </section>
    )
}