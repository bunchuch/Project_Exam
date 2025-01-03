import { RiGuideFill } from "react-icons/ri";
import Header from "../../../components/Header"


export const Help = () => {
    return<div className="my-4">
    <Header text={"Help"} icons={<RiGuideFill/>}/>


    
<h2 class="my-2 text-[14px] font-semibold text-gray-900 dark:text-white">Notifications and Alerts:</h2>
<ul class="max-w-md text-[14px] space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
    Stay Updated: Enable notifications to receive alerts about upcoming exams, deadlines, and announcements.
    </li>
    <li>
    Announcements: Check the "Notifications" section for important updates from administrators.
    </li>
</ul>


<h2 class="my-2 text-[14px] font-semibold text-gray-900 dark:text-white">Support and Feedback</h2>
<ul class="max-w-md space-y-1 text-[14px] text-gray-500 list-inside dark:text-gray-400">
  <li class="max-w-md text-[14px] space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
   
  Contact Support: Use the "Help" tab to reach out for technical or administrative support.
    </li>
    <li class="max-w-md text-[14px] space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
         Submit Feedback: Share your feedback to help improve the app's features and functionality.
    </li>
</ul>

<h2 class="my-2 text-[14px] font-semibold text-gray-900 dark:text-white">FAQs and Tutorials</h2>
<ul class="max-w-md text-[14px] space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
    FAQs: Find answers to common questions in the "FAQs" section
    </li>
    <li>
    Tutorials: Watch step-by-step video guides to understand key features
    </li>
</ul>

<h2 class="my-2 text-[14px] font-semibold text-gray-900 dark:text-white"> Logging Out</h2>
<ul class="max-w-md text-[14px] space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
    Logout: Click the "Logout" button in the top-right corner to securely exit your account after use.
    </li>
</ul>
    </div>
}