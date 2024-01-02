import React from "react";
import { Tooltip,Table,Button, Empty, Result } from "antd";
import { columnsReport } from "../componet/ColumsItem";
import { CiCalculator1, CiUndo } from "react-icons/ci";
import Header from "../../../components/Header";



export default function Report() {

    return <>
    <div className="flex w-full justify-between items-center ">
    <Header text="Report" icons={<CiCalculator1/>}></Header>
    </div>
    <Result
    status="500"
    title="There are some problems with your operation."
    extra={
      <Button className="bg-variation-500 text-white">
          Please contact provider for feedback
      </Button>
    }
  />
    
    
    
    </>


}