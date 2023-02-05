import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/Icon";
import { CiBookmarkPlus, CiCircleChevLeft } from "react-icons/ci";
import { Button, Form, Input, Select, Space } from "antd";
import Header from "../../../components/Header";

export default function RegisterStudent (){

    const navigator = useNavigate()

    return <>
    <Header icons={<CiBookmarkPlus/>} text="Add Student"/>
    <div className="bg-white border-neutral-200 border rounded-lg mt-2 p-3">
     <Button className="flex gap-2 items-center border-none" 
     onClick={()=> navigator("/dashboard/Student")}>
       <Icon Size={"1rem"} name={<CiCircleChevLeft/>}></Icon> back
     </Button>

     <div className="px-3 py-4">
     <Form>
        <div className="grid grid-cols-2 gap-3">
            <Form.Item name="fname" label="Frist Name">
            <Input />
            </Form.Item>

            <Form.Item name="lname" label="Last Name">
            <Input />
            </Form.Item>

            <Form.Item name="fname" label="Username">
            <Input
            defaultValue={["fnamelname"]}
            
            />
            </Form.Item>

            <Form.Item name="fname" label="Password">
            <Input defaultValue={"pucstd"} />
            </Form.Item>

            <Form.Item name="group" label="Course">
               <Select>

               </Select>
            </Form.Item>

            <Form.Item name="['province', 'city']" label="Address">
                <Space.Compact>
                    <Form.Item>
                    <Select placeholder="Select province"></Select>
                    </Form.Item>
              <Form.Item name="city">
              <Input placeholder="city"></Input>
              </Form.Item>

              <Form.Item label="Contact">
                <Input/>
            </Form.Item>
                </Space.Compact>
            </Form.Item>

           
        </div>

        <div className="flex justify-end">
            <Button style={{
                background: '#0f3460',
                color : '#ffff',
            }}>
                Create
            </Button>
        </div>
     </Form>
     </div>
    
    
    </div>
    
    </> 


}