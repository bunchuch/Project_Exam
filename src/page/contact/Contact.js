import Icon from "../../components/Icon"
import { useEffect } from "react"
import {HiOutlineMail} from "react-icons/hi"
import {TfiMapAlt} from "react-icons/tfi"
import {BiPhoneCall} from "react-icons/bi"
import {FiFacebook} from "react-icons/fi"
import { contact } from "../../data/data"
import {RiTelegramLine} from "react-icons/ri"


const CardContact = ({header,desc,contact,icon}) =>{

    return (
  <div className="border-[1px] rounded-lg py-4 px-5">
   <span className="inline-block p-2 text-blue-500 bg-blue-100
     rounded-xl  dark:text-white dark:bg-blue-500">
       <Icon name={icon} Size="1.5rem" color="purple"></Icon>
    </span>

    <div>
        <h1 class="text-xl font-semibold text-gray-700 dark:text-white">{header}</h1>

        <p class="mt-2 text-md text-gray-500 dark:text-gray-300">
           {desc}
        </p>
        <p class="mt-2  text-md text-purple-900 dark:text-gray-300">
           {contact}
        </p>
    </div>
</div>
    )
}


export default function Contact () {
   

    return (
        <section data-aos="fade-in"  className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
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
                { i.Email.map((x)=><CardContact header={x.title} desc={x.desc} icon={<HiOutlineMail/>} contact={x.contact}/>) }
                { i.Office.map((x)=><CardContact header={x.title} desc={x.desc} icon={<TfiMapAlt/>} contact={x.contact}/>) }
                { i.Phone.map((x)=><CardContact header={x.title} desc={x.desc} icon={<BiPhoneCall/>} contact={x.contact}/>) }
                { i.Phone.map((x)=><CardContact header={x.title} desc={x.desc} icon={<FiFacebook/>} contact={x.contact}/>) }
                { i.Phone.map((x)=><CardContact header={x.title} desc={x.desc} icon={<RiTelegramLine></RiTelegramLine>} contact={x.contact}/>) }
               
                </>))
              }
            </div>
        </div>
    </section>
    )
}