import React from "react";
import { MdBugReport, MdOutlineBugReport } from "react-icons/md";
import Header from "../../../components/Header";
import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { FiPlus } from "react-icons/fi";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
};


export default function Report() {

    return <>
    <div className="flex w-full mb-4 justify-between items-center ">
    <Header text="Report" icons={<MdOutlineBugReport/>}></Header>
    </div>
    
   <>
   
   <div className="bg-neutral-50 rounded-lg px-5 py-5">
   <Form
   variant="filled"
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    layout="vertical"
    className="max-w-xl text-[14px] py-2"
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Username"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Upload Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <FiPlus />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
    <Form.Item name={['user', 'Description']} label="Description">
      <Input.TextArea rows={5} />
    </Form.Item>
    <Form.Item label={null}>
      <Button className="text-gray-50 text-[14px] bg-gray-900 rounded-lg" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
   </>
    
    
    </>


}