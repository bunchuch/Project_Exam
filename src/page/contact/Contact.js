import { contact } from "../../data/data"
import "../../style/style.css"
import { Card } from "../../components/Card"
import {FcMindMap, FcPhone, FcServices, FcSms} from "react-icons/fc"

export default function Contact () {
   

    return (
        <section data-aos="fade-in"  className="py-0">
        <div className="container mx-auto px-6 mt-9 font-sans  ">
        
        <div className="mt-2 flex gap-2">
              <h1 className="text-2xl font-bold font-roboto text-gray-800 lg:text-3xl">Let Know about Us</h1>
                    <span className="inline-block w-4 h-8   border-[2px]  bg-gradient-to-r
                     from-fuchsia-600 to-pink-500  border-white rounded-full"></span>
                </div>
            <div className="grid grid-cols-1 gap-8 mt-3 lg:mt-10 md:grid-cols-2 xl:grid-cols-3 py-7">
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