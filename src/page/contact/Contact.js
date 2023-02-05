import Icon from "../../components/Icon"
import {HiOutlineMail} from "react-icons/hi"
import {TfiMapAlt} from "react-icons/tfi"
import {BiPhoneCall} from "react-icons/bi"

const CardContact = ({header,desc,tell,icon}) =>{
    return (
        <div class="flex flex-col items-center justify-center text-center">
        <span class="p-3 text-blue-500 rounded-full bg-purple-100/80 dark:bg-gray-800">
        <Icon name={icon} Size="1.5rem" color="purple"/>
        </span>
        <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">{header}</h2>
        <p class="mt-2 text-gray-500 dark:text-gray-400">{desc}</p>
        <p class="mt-2 text-purple-900 dark:text-blue-400">{tell}</p>
    </div>
    )
}


export default function Contact () {
    return (
        <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <div class="text-center">
                <p class="font-medium text-purple-900 dark:text-blue-400">Contact us</p>
    
                <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
    
                <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
            </div>
    
            <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <CardContact header="Email" desc="Our friendly team is here to help" icon={<HiOutlineMail/>} tell="PUCRetail@puctakhmau.com"/>
              <CardContact header="Office" desc="Come say hello at our office HQ." icon={<TfiMapAlt/>} tell="100 Smith Street Collingwood VIC 3066 AU"/>
              <CardContact header="Phone" desc="Mon-Fri from 8am to 5pm." icon={<BiPhoneCall/>} tell="+1 (555) 000-0000"/>
            </div>
        </div>
    </section>
    )
}