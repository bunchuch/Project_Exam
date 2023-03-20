


export const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1.5  w-[50%] bg-gray-300 rounded-md'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={` rounded-md h-full ${
                    progressPercentage < 50 ? 'bg-red-600 ' : ' bg-purple-700'}`}>
            </div>
            <p className="text-[14px] font-mono">{progressPercentage }%</p>
        </div>
    );
};