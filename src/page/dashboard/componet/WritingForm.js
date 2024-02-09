import { Button, Form, Input } from "antd"
import React from "react"
import Icon from "../../../components/Icon"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"



export const WritingForm = ({form}) => {
    return <>
    <div className="bg-white
       rounded-xl
       p-3">
        
        <Form.Item name="description" className="text-[12px]" label="Description">
              <Input className="py-2 w-2/3" placeholder="description"/>
          </Form.Item>
        <Form.List
          name="options"
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item className="my-2 text-[12px]"
                labelCol={{md : {span :24}}}
                  label={`Topic ${index + 1}`}
                  required={false}
                  key={field.key}
  
                  rules={[
                    {
                      required : true,
                      message : "topic cannot be null"
                    }
                  ]}
                >
                  <Form.Item 
                  name = {[field.name , "value"]}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input topic or delete this field.",
                      },
                    ]}>
                      <div className="flex items-center gap-2">
                      <Input className="py-2"
                      placeholder="topic"
                    />
                      
                      {fields.length > 1 ? (
                          <Icon Size={"1.2rem"} name={<CiCircleMinus
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            />} />
                    
                  ) : null}
                  </div>
                  </Form.Item>
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                className="flex items-center bg-yellow-300"
                  type="dashed"
                  onClick={() => add()}
                  icon={<Icon Size={"1.2rem"} name={<CiCirclePlus/>}></Icon>}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>    
        </div>
    
    
    </>
  }