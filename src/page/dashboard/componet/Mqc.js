import { Button, Checkbox, Form, Input, Space, message } from "antd";
import React, { useState } from "react";
import { CloseOutlined } from '@ant-design/icons';




export const Mqc = () => {
    const [check ,setCheck] = useState(0)
    const {TextArea} = Input
      
    return <> <div className="bg-neutral-50 px-3 py-2 
                  rounded-lg border-[1px] w-full border-neutral-200">
                        <Form.Item  rules={[
                     {
                   required: true,
                     message: 'Please input Question!',
                   },
                ]} 
                label="Question" name={'question'}>
                    <TextArea maxLength={100} showCount />
                  </Form.Item>
    
                  <Form.Item
                   rules={[
                    {
                      required: true,
                      message: 'Please input Correct answer!',
                    },
                  ]}
                  
                  label="Correct Answer" name={'correctAnswer'}>
                    <Input />
                  </Form.Item>
                  <Form.Item label="Description" name={'description'}>
                    <Input />
                  </Form.Item>
                  </div>
            <div className="bg-neutral-50 px-3 py-1 rounded-lg border-[1px]
             border-neutral-200 overflow-x-scroll">
                <p className="text-[12px] pb-4
                 text-gray-300">✨CA is correctAnswer Please select </p>
                    <Form.List name={'options'}>
                      {(subFields, subOpt) => (
                        <div className="flex flex-col"
                        >
                          {subFields.map((subField ,index) => (
                            <Space className="font-normal" key={subField.key}>
                              <Form.Item
                               rules={[
                                {
                                  required: true,
                                  message: `Choice could not null`,
                                },
                              ]}
                              
                              label={`choice ${index + 1}`}
                               name={[subField.name, 'value']}>
                                <Input onChange={setCheck(index + 1)} 
                                style={{width: '280px'}} 
                                placeholder={`Option ${index + 1} `} />
                              </Form.Item>
                              <Form.Item className="truncate"
                              style={{
                                width : '5rem'
                              }}
                              
                              rules={[
                                     {
                                     required: true,
                                    message: 'Please make a change before contiune',
                                             },
                                 ]}  
                               label="CA" 
                              name={[subField.name, 'isCorrect']}
                               valuePropName="checked">
                            <Checkbox ></Checkbox>
                              </Form.Item>
                              <Form.Item
                              rules={[
                                {
                                required: true,
                               message: 'Please make a change before contiune',
                                        },
                            ]} 
                              label="Check"
                              name={[subField.name, 'isSelect']}
                               valuePropName="checked">
                             <Checkbox></Checkbox>
                              </Form.Item>
                              <CloseOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          {
                            subFields.length  >= 10 ? null
                             : <Button type="dashed" onClick={() => {
                          
                              setCheck(subFields.length + 1)
                              subOpt.add()}
                              
                              } block>
                            + Add New Options
                          </Button>
                          }
                         
                        </div>
                      )}
                    </Form.List>
    
       </div>
       </>
    }