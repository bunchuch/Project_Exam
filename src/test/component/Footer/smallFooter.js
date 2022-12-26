import {BiCopyright, BiListCheck} from "react-icons/bi"
import {Link} from "react-router-dom"
import Icon from "../Icon"
const FoostList = (props) => {
    return <>
       <Link>
       </Link> <a href={props.link} className="text-[12px] ">{props.text}</a>
    </>
}

const footerList = [
{text:'2022 TestQuize',link:"/#"},
{text:'Privacy',link:"/Privacy"},
{text:'blog',link:"/blog"},
{text:'Term',link:"/term"},
{text:'Security',link:"/Security"},
{text:'Privacy',link:"/Privacy"},
{text:'About us',link:"/about"},,
{text:'Contact us',link:"/contact"}]

export default function SmallFooter  (props)  {


    return <span className=" md:flex space-x-4 text-blue-900 items-center">
        <div className="flex space-x-2 items-center">
            <div className=" px-2 py-2 items-center">
                <img className="object-cover h-5 w-5"
                    src="https://img.icons8.com/color/48/null/infinity.png" alt="icon" />
            </div>
            <div className="">
                <Icon name={<BiCopyright/>}></Icon>
            </div>
        </div>
      {
        footerList.map((items)=><FoostList link={items.link} text={items.text}/>)
      }
    </span>
}