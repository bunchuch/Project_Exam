



// const clude= [
//     {"id":"01", "choice":"his application are due","selected": false },
//     {"id":"02", "choice":"his train was dlayed" ,"selected": true},
//     {"id":"03", "choice":"he was late getting to school" ,"selected": false},
//     {"id":"04", "choice":"he was late getting to school" ,"selected": true},
    
// ]


// const result = clude.map(x => x.selected)
// const getProgress = result.filter((x) => x == true)
// console.log(getProgress.length)


export const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1.5  w-[40%] bg-gray-300 rounded-md'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={` rounded-md h-full ${
                    progressPercentage < 50 ? 'bg-red-600 ' : ' bg-purple-800'}`}>
            </div>
            <p className="text-[10px] lg:text-[14px] py-2 font-mono">completed {progressPercentage }%</p>
        </div>
    );
};