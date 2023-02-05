import React, { useState } from "react";
import { Button, Form, Input, Select, TimePicker, message } from "antd";
import axios from "axios";


export default function CreateGroup () {
const [group , setGoup] = useState('')
const [classe ,setClasse] = useState('')
const [teacher , setTeacher] = useState('')
const [level ,setLevel] = useState('')
const [time ,setTime] = useState([])
const [messageApi, contextHolder] = message.useMessage()
const key = 'updatable';


    const handleCreate = async (e) => {
        e.preventDefault(e)
       await axios.post("http://localhost:4000/group/create", {
            group : group,
            class : classe,
            teacher : teacher,
            level : level,
            time : time,
        }).then(respone => {
                messageApi.open({
                    key,
                    type : 'loading',
                    content : 'Loading ...'
                });
                setTimeout(()=>{
                    messageApi.open({
                        key,
                        type: 'success',
                        content : 'Loaded!',
                        duration : 2
                    })
                } ,[1000])
        }).catch(err => {
            console.log(err)
            messageApi.open({
                key,
                type : 'error',
                content : `Failded name ${err.response.data.message}`
            })
        })
    }

    const handleChange = (time)=>{
        setTime(time)
            
       
    }
    const handleChangeSelect = (value)=>{
        setLevel(value)
    }
    


    return <div className="bg-white px-6 py-8 rounded-xl border border-neutral-200">
     <Form>
        {contextHolder}
        <div className="grid grid-cols-2 gap-3">
        <Form.Item name="group" label="Group">
            <Input onChange={e => setGoup(e.target.value)}></Input>
        </Form.Item>

        <Form.Item name="Class" label="Class">
            <Input onChange={e => setClasse(e.target.value)}></Input>
        </Form.Item>

        <Form.Item name="teacher" label="Teacher">
            <Input onChange={e => setTeacher(e.target.value)}></Input>
        </Form.Item>


        <Form.Item name="level" label="Level">
           <Select
            onChange={handleChangeSelect}
           options={[{label : 'Beginner', value: 'Beginner'},
            {label : 'Pre-Intermediate', value: 'Pre-Intermediate'},
            {label : 'Intermediate',value:'Intermediate',},{
                label : "Upper-Intermediate",value:"Upper-Intermediate"
            }, {
                label : "Advanced",value:"Advanced"
            }]}
           ></Select>
        </Form.Item>


        <Form.Item name="Time" label="Time">
            <TimePicker.RangePicker value={time}
             onChange={handleChange} 
             placement="bottomRight" 
             format={"HH:mm"}/>
        </Form.Item>
        </div>
        <div className="flex justify-end">
        <Form.Item>
            <Button style={{
                background: '#0f3460',
                color : '#ffff',
            }} onClick={handleCreate}>
                Create
            </Button>
        </Form.Item>
        </div>
      
     </Form>
    </div>
}