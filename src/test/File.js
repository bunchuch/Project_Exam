// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Outlet, json, useParams } from "react-router-dom";
// import {Loader} from  "../components/load/Loader"
// import { TimerAction } from "../redux/TimerSlice";
// import { Checkbox, Pagination, Select, Switch } from "antd";
// import { CloseOutlined } from '@ant-design/icons';
// import { Button, Card, Form, Input, Space, Typography,Radio ,Upload ,message} from 'antd';
// import { CiCirclePlus, CiExport, CiSaveUp1 } from "react-icons/ci";
// import Icon from "../components/Icon";
// // import { UploadOutlined } from '@ant-design/icon'




// export const File = () =>{
     
//   const dispatch = useDispatch()
//   const disableTimer = useSelector((state)=> state.Time.disable)
//   const[posts, setPosts] = useState([])
//   const[total, setTotal] = useState('')
//   const[page ,setPage] = useState(0)
//   const [values ,setValues] = useState()
//   const [check , setCheck] = useState()
//   const [postPerpage ,setPostperPage] = useState(1) 
//   const onFinish = (values) => {
//     console.log('Received values of form:', values);
//   };
//  const disable = dispatch(TimerAction.disable({minutes :0}))
    
// const [fileList, setFileList] = useState([]);
//   const [uploading, setUploading] = useState(false);



//   const handleUpload = async () => {
//     const formData = new FormData();
//     console.log(fileList)
//      fileList.forEach((file) => {
//       formData.append('file', file);
//       console.log(file)
//     });  
//     setUploading(true);
   
//     // You can use any AJAX library you like

//     await axios.post(`${process.env.REACT_APP_API_KEY}question/test`, formData)
//     .then(res => {
//       setUploading(false)
//       message.success("upload successfully")
//       setFileList([]);
      
//     }).catch(error =>{
//       setUploading(false)
//       message.error("upload unsuccessfully")
//       console.log(error)
//       setUploading(false)
//     } )
//     setUploading(false)
//   };
//   const props = {
//     onRemove: (file) => {
//       const index = fileList.indexOf(file);
//       const newFileList = fileList.slice();
//       newFileList.splice(index, 1);
//       setFileList(newFileList);
//     },
//     beforeUpload: (file) => {
//       setFileList([...fileList, file]);
//       return false;
//     },
//     fileList,
   
//   };

//   useEffect(()=>{
//     const loader = async ()=>{
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//      setPosts(res.data)
//      setTotal(res.data.length - 1)
//     }

//     loader()
//   }, [])


//   const indexOfLastPage = page + postPerpage
//   const indexOfFirstPage = indexOfLastPage - postPerpage
//   const currentPost = posts.slice(indexOfFirstPage , indexOfLastPage)
//   const [form] = Form.useForm();
//   const handleChange =  (value) =>{
//    <a href="/file/2"></a>
//   }

//   const onShowSizeChange = (current , size)=>{

//   }





//     return <>
//      <button 
//      disabled={disableTimer} 
//      className={`${disableTimer ? "bg-blue-900" : "bg-red-400"} px-3
//       hover:bg-slate-600 active:bg-purple-600 py-4 text-xl 
//        m-11 rounded-lg text-white`}>click</button>
// <div className="container mx-auto">
//   <div className="flex justify-center">
//   {/* <Pagination
//         onChange={handleChange}
//         pageSize={1}
//         total={total}
//         showSizeChanger= {false}
//         current={page}
//        ></Pagination> */}
//   </div>
//     <>
//       <Upload listType="picture" {...props}>
//         <Button icon={<CiExport/>}>Select File</Button>
//       </Upload>
//       <Button
//         onClick={handleUpload}
//         disabled={fileList.length === 0}
//         style={{
//           marginTop: 16,
//         }}
//       >
//         upload
//         {/* {uploading ? 'Uploading' : 'Start Upload'} */}
//       </Button>
//     </>

  
  
// </div>
       
//     </>


// }

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { message } from 'antd';
import axiosInstance from '../api';

export const File = ()=> {
  const [secondsLeft, setSecondsLeft] = useState(10);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(prevSeconds => prevSeconds - 1); // Decrement seconds
      } else {
        clearInterval(timer); // Clear the timer when time is out
        handleSubmit(); // Call function to submit the form when time is out
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up timer on unmount
  }, [secondsLeft]);

  const handleSubmit = async (e) => {
   await axios.post(`${process.env.REACT_APP_API_KEY}user/register`, {
      name : "panha",
      password: "123",
      email : "panhan@email.com",
      role : ["teacher"]

    }).then((res)=> message.success("submitted form successfully"))
    .catch((error)=> {
      console.log(error.response.data.message)
      message.error(error.response.data.message)
    
    })
    // Your form submission logic here
    // For example, you can submit the form data to an API or perform other actions.
    console.log('Form submitted!');
  };



  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        {/* Your form inputs */}
        <button type="submit">Submit</button>
      </form>
      <p>Time left: {secondsLeft} seconds</p>
    </div>
  );
};

