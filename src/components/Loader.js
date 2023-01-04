
import {styleLoader} from "../style/style"


export default function Loader (){
    return <div className={styleLoader.main}>
    <div role="status" className={styleLoader.section2}>
        <svg className={styleLoader.svg} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={styleLoader.path1} fill="currentColor"/>
            <path d={styleLoader.path2} fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
}