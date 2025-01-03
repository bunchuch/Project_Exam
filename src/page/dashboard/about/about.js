import { GoInfo } from "react-icons/go"
import Header from "../../../components/Header"


export const About = () => {
    return<div className="mt-4 text-[14px]">
    <Header text={"About"} icons={<GoInfo/>}/>

    <div className="my-4">
        <h1>
        Welcome to PUC Dashboard! This platform is designed to streamline the examination process for 
        students, teachers, and administrators. Here’s a quick guide to get you started:
        </h1>
        <h1>
                For students
            </h1>
        <ul>
           <li>
            <p>
            Dashboard Overview 
            </p>
            <p>
            View your upcoming exams, assignments, and results at a glance.
            </p>
           </li>

        </ul>
        For Students:
Dashboard Overview:
View your upcoming exams, assignments, and results at a glance.
Take Exams:
Navigate to the "Exams" section to start your scheduled tests. Ensure your device is ready with a stable internet connection.
View Results:
Access your grades and feedback under the "Results" tab.
For Teachers:
Create Exams:
Use the "Create Exam" feature to design tests. You can add multiple-choice, short-answer, or essay questions.
Monitor Progress:
Track students' progress in real-time during exams.
Review and Grade:
Evaluate answers and provide feedback in the "Results" section.
For Administrators:
Manage Users:
Add, edit, or remove students and teachers from the system.
Set Exam Schedules:
Define exam dates, durations, and other settings.
Monitor System Usage:
View system logs and performance analytics to ensure smooth operation.
General Features:
Notifications:
Stay updated with reminders about upcoming exams and deadlines.
Support and Help Center:
Access tutorials, FAQs, or contact support for assistance.
Tips for Using the System:
Always ensure your profile is updated with the correct details.
Familiarize yourself with the exam guidelines before starting.
If you encounter any technical issues, report them immediately via the "Support" section.
Start exploring the dashboard and make the most of the app!
    </div>
    </div>
}