import React, { useState } from "react";


export function ReadingCard ({header,sentence}){



    return (
        <div class="w-full mt-2 md:p- text-center bg-white rounded-[4px] shadow-sm shadow-cyan-500/10 p-5 dark:bg-gray-800 dark:border-gray-700">
  <article>
    <h1 className="pb-2 font-ubuntu font-bold underline text-start">{header}</h1>
    <span className="text-justify tracking-wider">
        <p className="text-[15px]">
       {sentence}
        </p>
    </span>
  </article>
</div>
    )
}