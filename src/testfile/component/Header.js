import React from "react";
import Audio from "../../components/Audio";

export default function Header ({item}) {
        return (
            <div className="bg-white -z-10 shadow-sm shadow-gray-500/10 
            border-[1px] border-gray-200 rounded tracking-wide 2xl:mt-3 md:px-2 md:py-2 space-y-2">
              <Audio audio = {item}></Audio>
            </div>
        )
}