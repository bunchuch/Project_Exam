import React from "react";
import { Tooltip,Table,Button, Empty, Result } from "antd";
import { columnsReport } from "../componet/ColumsItem";
import { CiCalculator1, CiUndo } from "react-icons/ci";
import Header from "../../../components/Header";



export default function Report() {

    return <>
    <div className="flex justify-between items-center pb-2 ">
    <Header text="Report" icons={<CiCalculator1/>}></Header>
    </div>
    <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button key="console">
        Go Console
      </Button>
    }
  />
    
    
    
    </>


}