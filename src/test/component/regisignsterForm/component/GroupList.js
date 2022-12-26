import Forminput from "./Forminput";



export default function GroupList(props){
    return <>
    
    <div class="w-full h-[10rem] text-sm font-medium text-gray-900 bg-white 
rounded-sm mt-4 px-2 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-y-auto">
    
    <div href="#" class=" py-2 px-4 w-full border-b border-gray-200 cursor-pointer space-x-4 items-center flex hover:bg-gray-100 hover:text-blue-700 
    focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600
     dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
     <input value={props.value} name={props.name} onChange={props.onchange} type="radio"></input>
     <label >Group 1</label>
    </div>
  

</div>
    </>
}