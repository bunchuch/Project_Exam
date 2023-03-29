const examStatusStyle ={
    "arrowTextstyle" : "font-ubuntu font-medium items-center space-x-2 flex flex-row uppercase",
    "arrowstyle" : "cursor-pointer  text-purple-800  space-x-2 items-center rounded flex justify-between active:bg-purple-100",
    "mainStyle" : "py-4 md:px-2 px-4 overflow-auto",
    "mainwhenfasle" : "w-full hidden",
    "listyle" : {
        "liststyle" : "md:py-2 py-1.5 px-2 md:px-3.5 rounded-md border-1 border-purple-400",
        "ulstyle" : "inline-flex space-x-2 md:space-x-4",
        "active-unchecked" : "border-2 border-purple-500 bg-purple-200 text-purple-800 font-semibold",
        "active-checked"  : "border-2 border-green-600 bg-green-300 text-slate-800 ",
        "normalstyle-checkd" : "bg-green-300 border-green-400 font-semibold text-green-900 border hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        "normalstyle-uncheckd" : "bg-purple-200 text-purple-900 border-purple-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    }
}


const buttonstyle = {
    "nextBtn" : "rounded relative inline-flex group items-center justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-800 text-white active:bg-purple-600 active:shadow-none",
    "prevBtn" : "rounded relative inline-flex group items-center   justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-100 text-purple-800 active:bg-purple-50 active:shadow-none",
    "grenBtn" : "rounded relative inline-flex group items-center   justify-center px-4 w-32 py-2 m-1 cursor-pointer bg-purple-100 text-purple-800 active:bg-purple-50 active:shadow-none",
}


const examstyle = {
    "quiz" : {
        "main" : "mx-auto max-w-6xl 2xl:py-5 md:px-0 md:py-3 px-4 flex items-center justify-between dark:border-gray-700",
        "quizboxdiv" : "max-w-6xl md:mt-7 mx-auto",
        "quizboxgrid" : "grid w-full gap-2 p-2 xl:p-0 md:grid-cols-3 grid-cols-2 ",
    },
    "task" : {
        "main" : "max-w-6xl mx-auto md:p-0 p-5 max-md:relative",
        "taskbox" : "bg-white mt-3 -z-10 shadow-sm md:py-6 shadow-gray-500/10 border-[1px] border-gray-200 rounded tracking-wide lg:mt-3 md:px-6 px-2 py-4 space-y-2 w-full h-[50%]",
        "questiondiv" : "flex space-x-2 mt-5 mx-5",
        "questionText" : "text-md trackgin-wide font-medium md:text-[18px]",
        "btnstylediv"  : "flex flex-row space-x-2 md:items-center justify-between md:justify-end py-2 mt-[10px]",
        "spanbtn" : "relative flex items-center space-x-2",

    }
}

const styleGroupInput = {
    "main": "flex items-center py-2 rounded-[5px] xl:text-[15px] md:mb-1 sm:text-md ",
    "input-style": " text-purple-800 w-5 h-5 bg-purple-900 accent-purple-800 dark:bg-purple-700 dark:border-gray-600",
    "label-style": " ml-2  md:text-[16px] text-[14px] text-gray-900 indent-4 dark:text-gray-300 hover:text-gray-500",
 }

const styleNavbar = {
    "navStyle-noneLoggin" : "bg-white border-gray-500 text-slate-900 md:py-0 ",
    "navStyle-login": "bg-slate-900 text-white md:shadow-orange-100  md:border-none md:py-0",
    "container" : "flex justify-between items-center py-[10px]  mx-4 md:mx-[70px] md:py-[px] md:flex text-sm md:justify-between md:items-center   ",
    "container2": "flex items-center justify-between",
   "conatiner3" : " flex flex-row justify-between space-x-2", 
    "img-style" : "object-fill md:w-full md:h-10 h-8 w-full",
    "divtag-stlye-three": " flex flex-row justify-between space-x-2",
    "atag-style-nav": " md:text-[20px] text-[18px]  font-bold transition-colors duration-300 transform dark:text-white lg:text-xl md:tracking-wide hover:text-gray-700 dark:hover:text-gray-300",
    "divtag-style-four": " hidden md:items-center md:justify-between md:flex",
    "atag-nav-list-style": " text-white bg-purple-800 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-  px-3 py-2 mr-2 mb-2   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none    dark:focus:ring-blue-800",
}


const styleLoader = {
    'main' : "text-center relative justify-start flex   h-screen  ",
    'section2': "absolute -left-10 right-0 md:top-30 md:bottom-30  md:left-0 md:right-0",
    'svg'  : "inline mr-2 w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] text-gray-200 absolute top-40 animate-spin dark:text-gray-600 fill-purple-900 ",
    'path1': "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z ",
    'path2': "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
}




const styleInstruction = {
    "main" : "flex  text-purple-900 py-2 space-x-1 items-center md:py-2  rounded-[4px]",
    "article": "flex items-center space-x-1 md:space-x-3 items-center md:space-x-2 tracking-wide",
    "header": "font-semibold leading-none text-sm ",
    "paragrah": "text-[12px] md:text-sm text-gray-800"
  }
  


const styleAudio = {
    "main" : "w-full rounded-lg text-center font-inter shadow-sm shadow-cyan-500/10 bg-white",
    "audio" : "w-full bg-gray-100 ",
    "title_audio": "text-[14px] text-purple-900 mx-2 font-medium"
  }
  

const styleWriting = {
    "main" : "rounded-lg w-full h-auto space-y-2",
    "container" : "w-full shadow-gray-500/10 rounded-lg dark:bg-gray-700 dark:border-gray-600 ",
    "divtag2" : "py-4 relative",
    "divtag3 " : "py-2 bg-white rounded-t-lg dark:bg-gray-800",
    "divtag4" : " flex pl-0 space-x-1 sm:pl-2",
    "textarea" : "w-full rounded-lg tracking-widest text-sm border-[1px] border-gray-300 border-dashed text-gray-900 bg-white p-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 ",
    "divtag5" : "flex items-center justify-between px-3 mt-1 dark:border-gray-600 ",
    "btn-style" : " inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-purple-800 rounded-[4px] focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800",
    "label-style" : "inline-flex justify-center cursor-pointer p-2 ",
    "input-style" : " "    
}


const styleError404 = {
	"main" : "flex items-center justify-center flex bg-purple-100  max-h-screen p-16 dark:bg-gray-900 dark:text-gray-100",
	"container": " container flex-row  flex items-center justify-center px-5 mx-auto my-8",
	"tag3" : "max-w-md  flex justify-center items-center flex-col text-center",
	"header" : "mb-8 text-center font-extrabold text-9xl dark:text-gray-600" ,
	"spantag" : " ",
	"paragrh" : " md:text-[28px] text-[18px] font-ubuntu font-semibold md:text-3xl",
	"paragrah2" : "mt-4 mb-8 dark:text-gray-400",
	"atag" : "px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 "
}

const styleRenderQuestion = {
    "divtag-header" : "flex justify-between items-center",
    "header-question-number" : "text-md trackgin-wide font-medium",
    "badges" : "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
    "ptag_question": "text-[14px] text-gray-800 mt-4",
    "divtag-groupInput": "inline-flex flex-col"
}

const styleExamStatus = {
  "main": "md:mt-10",
  "header-title" : "font-medium text-[14px] md:text-[14px] my-1 tracking-wide bg-purple-900 py-1 px-2 bg-purple-800 text-white",
  "divtag-style" : "",
  "rule_exam-style" : " ",
  "ul-tag" : " py-0  flex  md:grid md:grid-rows md:grid-cols-5 flex bg-white border-gray-400 md:rounded-[4px] ",
  "li-tag" : "bg-blue-100",
  "a-tag" :  "leading-tight text-gray-900 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
  

}

module.exports = {styleWriting, styleError404 ,
    styleGroupInput,styleAudio, styleNavbar, 
    styleInstruction,styleLoader,
    styleRenderQuestion,
    styleExamStatus,
    buttonstyle,
    examstyle,
    examStatusStyle,


}