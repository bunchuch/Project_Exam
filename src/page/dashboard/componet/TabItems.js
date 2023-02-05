import React from 'react';
import Group from '../Group/Group';
import { Navigate } from 'react-router-dom';
import { ReportExam } from '../examReport/examReport';
import { QuizTable } from '../examReport/quizTable';

export const TabExamItem =  [
    {
      key: 1,
      label: 'Group',
      children: <Group/>,
    },
    {
      key: 2,
      label: 'Add Student',
      children: <Navigate state={{}} 
      to="/dashboard/create-new-Student"/>,
    },
    {
      key: 3,
      label: 'Create Group',
      children: <Navigate state={{}} 
      to="/dashboard/create-new-group"/>,
    },
    {
      key: 4,
      label: 'Create Exam',
      children: <Navigate state={{}} 
       to="/dashboard/Group/create-exam"/>,
    },
  ];


  export const GroupInfoTab = [
    {
      key: 1,
      label: 'Exam',
      children: null,
    },
    {
      key: 2,
      label: 'Student',
      children: null,
    },
    {
      key: 3,
      label: 'Report',
      children: null,
    },
    
  ]

  export const TabExam = [
      {
      key: 1,
      label: 'Quiz',
      children: <QuizTable/>,
    },
    {
      key: 2,
      label: 'Report',
      children: <ReportExam/>,
    }
    ]

  export const CollapseItem = [
    {
      key : '1',
      label : '',
      children : null
    }
  ]


