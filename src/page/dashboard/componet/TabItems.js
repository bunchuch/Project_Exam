import React from 'react';
import CreateGroup from '../exam/CreateGroup';
import Main from '../exam/Main';
import McqCreate from '../exam/MqcCreate';
import WritingCreate from '../exam/WritingCreate';
import { Empty } from 'antd';


export const TabExamItem =  [
    {
      key: 1,
      label: 'Main',
      children: <Main/>,
    },
    {
      key: 2,
      label: 'Create Group',
      children: <CreateGroup/>,
    },
  ];


  export const TabCreateExam = [
    {
      key: 1,
      label: 'Multiple Choice',
      children: <McqCreate/>,
    },
    {
      key: 2,
      label: 'Fill in Blank',
      children: <h1>Fill in blank</h1>,
    },
    {
      key: 3,
      label: 'Writing',
      children: <WritingCreate/>,
    },

  ]


  export const CollapseItem = [
    {
      key : '1',
      label : '',
      children : <McqCreate/>
    }
  ]


  export const renderType = (type) => {

    if (type === "Mqc"){
        return <McqCreate/> 
    } else if(type === "Blank"){
        return <>Blank</>

    }else if(type === "Writing"){
        return <WritingCreate/>
    }else{
        return <Empty
          description="create exam"/>
    }

}