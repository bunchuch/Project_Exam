import { Button, Form, Input, message,Tag } from "antd";
import React, { useState } from "react";
import Icon from "../../../components/Icon";
import { CiCircleRemove } from "react-icons/ci";


export const Blank = ({form}) => {
    const {TextArea} = Input
    const [sentence ,setSentence] = useState('')
    const [addOptions ,setAddOption] = useState([])
    const [disabled ,setDisabled] = useState(false)
    const [hightlightWord , setHigthligthWord] = useState(null)
    const [selectedTags, setSelectedTags] = useState(['Books']);
    const { CheckableTag } = Tag;
    // try to splite a sentence fucntion()
    const SentenceString = (sentences) =>{
      const slitString = sentences.split(/\W+/)
      setSentence([...slitString])
      }

    
  
      //find dulicate item of key word select
      const handleClickAdd = (value, k) => {
        const isDuplicate = 
        addOptions.some((item,index)=>
         index !== addOptions.indexOf(item))
        if(isDuplicate){
         message.warning('words is duplicate')
        }else{
          setAddOption([...addOptions ,value])
        }
      
      }
  
     // remove each of the key word function
    const handleClickDelete = (value)=>{
          setAddOption(values => {
             return values.filter(i => i !== value)
          })
      }
      const getRamdomItem =(arr , count) => {
        const shuffled = arr.sort(()=> Math.random() - 0.5)
        return shuffled
     }
      // fill form for options into db question function()
    const fillForm = ()=>{
          form.setFieldsValue({
            options : getRamdomItem(addOptions, 1)
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
                        message : "Please Enter the Sentence",
                        whitespace:true,
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
                    splite Sentence
                    </Button>
          </div>
                    <div>
              {/* fill in blank */}
              
                 
                <p className="text-[12px] my-2  text-gray-600">
                ✨please select the words for make blank box</p>

              <Form.Item>
              <ul className="flex flex-wrap gap-1 mt-2">
                  {
                    sentence ? sentence.map((i , k)=> <li key={k}>
                      <CheckableTag 
                        key={i}
                        checked ={addOptions.includes(i)}
                      className={`text-[14px] p-2 border border-neutral-200`} htmlType="button" 
                      disabled={disabled}
                       onChange={()=>handleClickAdd(i, k)}>
                        {i}
                        </CheckableTag>
                      </li>)
                   : <></>}
                </ul>
              </Form.Item>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 p-2 rounded-lg">
                <div className="flex flex-wrap gap-1 pb-2">
                <p className="font-semibold">option words :</p>
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
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <p className="mb-3 text-gray-600 text-[12px]">
                    Please Enter Correct Answer</p>
                  {
                    addOptions ? addOptions.map((item , key)=>(
                            <Form.Item 
                              rules={[
                                {
                                  required:true,
                                  message : 'correct answer box is missing',
                                  whitespace:true,
                                }
                              ]}
                            label={`Blank_${key+1}`} 
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