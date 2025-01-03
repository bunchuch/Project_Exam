import { Button } from "antd";
import React from "react";
import {  FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



export default function NavigatorButton () {

    const navigate = useNavigate()

    return <Button icon={<FiArrowLeft/>} className="mb-3 p-0 text-center font-ubuntu  border-none shadow-none " type="default"
    onClick={()=>navigate(-1, {replace : true})}>Back</Button>
}