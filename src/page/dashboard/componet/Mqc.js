import { Button, Checkbox, Form, Input, Select, Space, message } from "antd";
import React, { useEffect, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import Icon from "../../../components/Icon";
import {CiTrash} from "react-icons/ci"



export const Mqc = ({form , correctAnswer}) => {
    const [check ,setCheck] = useState(0)
    const {TextArea} = Input
    const {Option} = Select
    var filterValue =""
 
   

    return <> <div className="bg-neutral-50 px-3 py-2 
                  rounded-lg border-[1px] w-full border-neutral-200">
                        <Form.Item  rules={[
                     {
                   required: true,
                     message: 'Please input Question!',
                   },
                ]} 
                label="Question" name={'question'}>
                    <TextArea maxLength={300} showCount />
                  </Form.Item>
                  <p className="text-[12px]
                                  text-gray-600
                    ">✨Please add one more default options before make the correctAnswer</p> 
                   <Form.Item
                    rules={[
                     {
                       required: true,
                       message: 'Please input Correct answer!',
                     },
                   ]}
                   
                   label={`Correct Answer`} name={'correctAnswer'}>
                        <Select label={'correctAnswer'} mode='multiple'>
                          {form.getFieldsValue()?.options?.map((items,key)=> <Option
                          value={items?.value}
                          key={key+1}>
                                option {key+1}
                          </Option>)}
                        </Select>
                   </Form.Item>
                  <Form.Item initialValue={"Please make sure before make a choice"} 
                  label="Description" name={'description'}>
                    <Input />
                  </Form.Item>
                  </div>
            <div className="bg-neutral-50 px-3 py-1 rounded-lg border-[1px]
             border-neutral-200 overflow-x-scroll">
                    <Form.List name={'options'}>
                      {(subFields, subOpt) => (
                        <div className="flex flex-col"
                        >
                          {subFields.map((subField ,index) => (
                            <Space className="font-normal inline-block" key={subField.key}>
                              <span className="inline-flex w-full items-center gap-2">
                              <Form.Item
                              className="w-full"
                              initialValue={`Options${index+1}`}
                               rules={[
                                {
                                  required: true,
                                  message: `Choice could not null`,
                                },
                              ]}
                              
                              label={`choice ${index + 1}`}
                               name={[subField.name, 'value']}>
                                <TextArea onChange={setCheck(index + 1)} 
                                
                                placeholder={`Option ${index + 1} `} />
                              </Form.Item>
                              <Button classNames="shadow-none border-none mt-3"  onClick={() => {
                                  subOpt.remove(subField.name);
                                }} className="">
                                <Icon name={<CiTrash/>} Size={"1.2rem"}/>
                              </Button>
                              </span>
                            
                              <div className="inline-flex space-x-10 items-center">
                              <p className="text-[14px] pb-4
                             text-gray-300">✨Please Check for correctAnswer</p>
                              <Form.Item initialValue={false} className="inline-flex"
                              style={{
                                width : '5rem'
                              }}
                              
                              rules={[
                                     {
                                     required: true,
                                    message: 'Please make a change before contiune',
                                             },
                                 ]}  
                              name={[subField.name, 'isCorrect']}
                              valuePropName="checked">
                            <Checkbox>correctAnswer</Checkbox>
                              </Form.Item>
                              <Form.Item
                              initialValue={false}
                              rules={[
                                {
                                required: true,
                               message: 'Please make a change before contiune',
                                        },
                            ]} 
                              name={[subField.name, 'isSelect']}
                               valuePropName="checked">
                             <Checkbox disabled>isSelect</Checkbox>
                              </Form.Item>
                              </div>
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