import React from "react";
import { Tooltip,Table,Button } from "antd";
import { columnsReport } from "../componet/ColumsItem";
import { CiCalculator1, CiUndo } from "react-icons/ci";
import Header from "../../../components/Header";



export default function Report() {


  console.log(process.env.REACT_API_KEY)

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
   
      const data = [
        {
          key: '1',
          name: 'John Brown',
          chinese: 98,
          math: 60,
          english: 70,
          status : "failed"
        },
        {
          key: '2',
          name: 'Jim Green',
          chinese: 98,
          math: 66,
          english: 89,
          status : "pass"
        },
        {
          key: '3',
          name: 'Joe Black',
          chinese: 98,
          math: 90,
          english: 70,
          status : "failed"
        },
        {
          key: '4',
          name: 'Jim Red',
          chinese: 88,
          math: 99,
          english: 89,
          status : "failed"
        },
      ];

    return <>
    <div className="flex justify-between items-center pb-2 ">
    <Header text="Report" icons={<CiCalculator1/>}></Header>
        <Button type="default" icon={<CiUndo/>} >Reload</Button>
    
    </div>
    
    <Table columns={columnsReport} dataSource={data} onChange={onChange} />
    
    </>


}