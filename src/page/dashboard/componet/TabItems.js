import React from 'react';
import Group from '../Group/Group';
import { Navigate } from 'react-router-dom';
import { ReportExam } from '../examReport/examReport';
import { QuizTable } from '../examReport/quizTable';
import Icon from '../../../components/Icon';
import {CiMemoPad, CiEdit
   ,CiReceipt, CiDiscount1,
   CiFolderOn,
   CiCreditCard2,
   CiStopwatch ,
   CiViewList,
  CiUser,
  } from 'react-icons/ci'
import StudentExam from '../student/studentExam';
import StartTimer from '../exam/StartTimer';
import Exam from '../exam/Exam';
import GroupExamReport from '../Group/GroupExamReport';

export const CourseTabItem =  [
    {
      key: 1,
      label: <label className=' inline-flex font-ubuntu  items-center gap-2'>
        <Icon Size={"1.2rem"} name={<CiMemoPad/>}/>
        course</label>,
      children: <Group/>,
    },
    {
      key: 2,
      label: <label className=' inline-flex font-ubuntu items-center gap-2'>
        <Icon Size={"1.2rem"} name={<CiUser/>}/>
        add new student</label>,
      children: <Navigate state={{}} 
      to="/dashboard/create-new-Student"/>,
    },
    {
      key: 3,
      label: <label className=' inline-flex font-ubuntu items-center gap-2'>
      <Icon Size={"1.2rem"} name={<CiEdit/>}/>
      create course</label>,
      children: <Navigate state={{}} 
      to="/dashboard/create-new-group"/>,
    },
    {
      key: 4,
      label: <label className=' inline-flex font-ubuntu items-center gap-2'>
      <Icon Size={"1.2rem"} name={<CiReceipt/>}/>
      create exam</label>,
      children: <Navigate state={{}} 
       to="/dashboard/Group/create-exam"/>,
    },
  ];


  export const GroupInfoTab = [
    {
      key: 1,
      label: <label className=' inline-flex font-ubuntu items-center gap-2'>
      <Icon Size={"1.2rem"} name={<CiReceipt/>}/>
       exam</label>,
      children: null,
    },
    {
      key: 2,
      label: <label className=' inline-flex font-ubuntu items-center gap-2'>
      <Icon Size={"1.2rem"} name={<CiUser/>}/>
      student</label>,
      children: null,
    },
    {
      key : 3,
      label : <label  className=' inline-flex font-ubuntu items-center cursor-not-allowed gap-2'>
      <Icon Size={"1.2rem"} name={<CiViewList/>}/>
      lesson</label>,
      children : <GroupExamReport/>,
      disabled : true,
    }
    
  ]

  export const TabExam = [
      {
      key: 1,
      label: <label className=' inline-flex font-ubuntu items-center gap-2'>
      <Icon Size={"1.2rem"} name={<CiFolderOn/>}/>
      sections</label>,
      children: <QuizTable/>,
    },
    {
      key : 2,
      label : <label className=' inline-flex font-ubuntu items-center gap-2'>
      <Icon Size={"1.2rem"} name={<CiDiscount1/>}/>
      exam result</label>,
      children : <ReportExam/>,
    }
    ]


export const studentBoard = [
  {
    key: 1,
    label: <label className=' inline-flex font-ubuntu items-center gap-2'>
    <Icon Size={"1.2rem"} name={<CiDiscount1/>}/>
    Exam Result</label>,
    children: <StudentExam/>,
  },
]


export const ExamTabBoard = [
  {
    key : 1,
    label :<label className=' inline-flex font-ubuntu items-center gap-2'>
    <Icon Size={"1.2rem"} name={<CiCreditCard2/>}/>
    exam</label>,
    children :<Exam/>
  },
  {
    key : 2,
    label : <label className=' inline-flex font-ubuntu items-center gap-2'>
    <Icon Size={"1.2rem"} name={<CiStopwatch />}/>
    timer</label>,
    children : <StartTimer/>,
    disabled: true,
  }
]

  export const CollapseItem = [
    {
      key : '1',
      label : '',
      children : null
    }
  ]


