import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import Icon from "../../../components/Icon";
import { CiCircleRemove } from "react-icons/ci";


export const Blank = ({form}) => {
    const {TextArea} = Input
    const [sentence ,setSentence] = useState('')
    const [addOptions ,setAddOption] = useState([])
    const [disabled ,setDisabled] = useState(false)

    // try to splite a sentence fucntion()
    const SentenceString = (sentences) =>{
      console.log(sentence)
      const slitString = sentences.split(' ')
      setSentence([...slitString])
      }
  
      //find dulicate item of key word select
      const handleClickAdd = (value, k) => {
        console.log( "value click is :" , value)
        const isDuplicate = 
        addOptions.some((item,index)=>
         index !== addOptions.indexOf(item))
        if(isDuplicate){
         message.error('words is duplicate')
        }else{
          setAddOption([...addOptions ,value])
        }
      }
  
     // remove each of the key word function
    const handleClickDelete = (value)=>{
          setAddOption(values => {
             return values.filter(i => i !== value)
          })
  
        console.log(addOptions , addOptions.length)
      }
  
      // fill form for options into db question function()
    const fillForm = ()=>{
          form.setFieldsValue({
            options : addOptions
            }) 
        }
    return <div className="w-full relative grid grid-cols-1">
      <div>
                <Form.Item  label="Description" name={'description'}>
                  <Input style={{width : '400px'}} className="" />
                  </Form.Item>
                    <p className="text-[12px] text-gray-300">✨ : 
                    Please Enter to Sentence </p>
                    <Form.Item rules={[
                      {
                        required : true,
                        message : "Please Enter the Sentence"
                      }
                    ]} name={'question'} label="Sentence"> 
                      <TextArea 
                      maxLength={500} showCount
                      style={{
                        height : "10rem"
                      }}
                      >
                      </TextArea>
                    </Form.Item> 
                    <Button 
                    className="bg-yellow-300"
                    onClick={()=>{
                     SentenceString(form.getFieldValue().question)} }>
                    Slice Sentence
                    </Button>
          </div>
                    <div>
              {/* fill in blank */}
              <Form.Item>
              <ul className="flex flex-wrap gap-1 mt-2">
                  {
                    sentence ? sentence.map((i , k)=> <li key={k}>
                      <Button className={``} htmlType="button" 
                      disabled={disabled}
                       onClick={()=>handleClickAdd(i, k)}>{i}</Button>
                      </li>)
                   : <></>}
                </ul>
              </Form.Item>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 border-[1px] border-neutral-200 p-3 rounded-lg">
                <div className="flex flex-wrap gap-1 pb-2">
                <p>📌Key words :</p>
                <div>
                  <ul className="flex flex-wrap gap-1  px-2">
                {addOptions.map((i,k)=><li key={k} className="">
                  <Button type="button"
                onClick={()=> handleClickDelete(i) }
                className="flex gap-2 bg-neutral-200 border-none
                 px-2 items-center p-0 " key={k}>
                 <p>{i}</p> 
                 <div className=" justify-center">
                 <Icon name={<CiCircleRemove/>} Size={"1rem"}/>
                 </div>
              </Button>
                </li> 
                )}
                  </ul>
                </div>
                {
                  addOptions.length > 0 ? <>
                    <Button className="bg-rose-500"
                  style={{
                    color:"#ffff"
                  }} 
                  onClick={fillForm}>Add</Button>
                  </>
                  : <></>
                }
              </div>
              <Form.Item name={"options"}>
                  <TextArea style={{
                    height : '10rem'
                  }}/>
              </Form.Item> 
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg
                 border-[1px] border-neutral-200">
                  <p className="mb-3">✅Correct Answer</p>
                  {
                    addOptions ? addOptions.map((item , key)=>(
                            <Form.Item label={`Box${key+1}`} 
                            name={['correctAnswer', `blank${key+1}`]}>
                              <Input/>
                            </Form.Item>
                    )) : 0
                  }
                </div>
                
              </div> 
              </div>
    </div>
  }