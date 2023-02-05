import React from "react";
import { Form, Input, Upload } from "antd";



export default function WritingCreate (){
    return <>
    <Form>
        <Form.Item name="topic" label="Topic">
            <Input>
            </Input>
        </Form.Item>

        <Upload>
            <Input></Input>
        </Upload>
    
    </Form>
    
    </>
}