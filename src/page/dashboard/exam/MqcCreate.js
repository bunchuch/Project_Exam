import React from "react";
import {Input, Form,Button , Upload} from "antd"
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios";


export default function McqCreate (){

const id = ""

    const onGetid = async ()=>{
        axios.get(`${process.env.REACT_APP_API_KEY}exam/${id}`)
    }


    return <>
    <Form>
    <div className="grid grid-cols-2 gap-4">
        <div className=" bg-gray-50 p-3 
        rounded-lg border-[1px] border-neutral-200">
        <Form.Item name="question" label="question">
            <Input></Input>
        </Form.Item>
        <Form.Item name="ca" label="correct answer">
            <Input></Input>
        </Form.Item>

        <Form.Item name="upload file" label="upload file">
         <Upload>
            <Input placeholder="upload file"></Input>
         </Upload>
        </Form.Item>
        <Form.Item name="desc" label="description">
            <Input></Input>
        </Form.Item>
        </div>
   
    <div className="grid grid-cols-2 gap-4 p-3 bg-neutral-50
     border-neutral-200 border-[1px] rounded-lg">
        <Form.Item name="f1" label="field1">
            <Input></Input>
        </Form.Item>
        <Form.Item name="f2" label="field2">
            <Input></Input>
        </Form.Item>
        <Form.Item name="f3" label="field3">
            <Input></Input>
        </Form.Item>
        <Form.Item name="f4" label="field4">
            <Input></Input>
        </Form.Item>

        <Form.Item name="f5" label="field5">
            <Input></Input>
        </Form.Item>
        
        <Button icon={<CiCirclePlus/>} type="dashed">Add field</Button>
                </div>
            </div>
    </Form>
   
   
    
    </>
}