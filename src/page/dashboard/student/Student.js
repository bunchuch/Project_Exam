import React from "react";
import { Button, Table,} from 'antd';
import { CiCirclePlus, CiPenpot} from "react-icons/ci";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { columnsStudent } from "../componet/ColumsItem";


  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

export default function Student() {

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };


    return <>
    <div className="flex justify-between items-center pb-2">
      <Header text="Stduent" icons={<CiPenpot/>}></Header>
      <Link to={"/dashboard/Student/Create"}>
        <Button type="default" icon={<CiCirclePlus/>}>Add Student</Button>
      </Link>
  
    </div>
    
    <Table columns={columnsStudent} dataSource={data} onChange={onChange} />
    
    </>
}