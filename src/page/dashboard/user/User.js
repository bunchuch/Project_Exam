import React, {useEffect, useState} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { columnsUser } from "../componet/ColumsItem";
import { CiCirclePlus, CiUndo, CiUser } from "react-icons/ci";
import Icon from "../../../components/Icon";
import axios from "axios";
import { Button, 
    Table, 
    Tooltip, 
    Form,Input
    ,Radio,Select,InputNumber
    ,Switch, TreeSelect, Cascader,
     DatePicker, message, Space, Tag
    } from 'antd';
import Header from "../../../components/Header";
import { Loader } from "../../../components/load/Loader";



const { TextArea } = Input;

const role = [ "Admin" , "Teacher", "Staff"]

export default function User () {

    const [loading, setLoading] = useState(false);
    const [data ,setData] = useState()
    


    const ApiGet = async () => {
      await axios.get("http://localhost:4000/user/").then(response => {
        setData([...response.data.user])
     
    }).catch(err => console.log(err))
    setTimeout(() => {
      setLoading(false);
    }, 1000);
     }

    useEffect(()=> {
    ApiGet()
    }, [])
   
      const start = () => {
        setLoading(true);
        
        ApiGet()
      
      }

     
      


    return <div className="">
      {
       loading ? <Loader></Loader> : null
      }
            <div className="flex gap-3 py-2 justify-between">
              <Header icons={<CiUser/>} text="User"/>
            
    
            <div className="gap-2 flex">
            <Select
            value={"Filter"}>
            {role.map(i =><Select.Option value={i}></Select.Option> )}
             </Select>
              <Link to={`/dashboard/User/Add`} >
                <Button icon={
                     <Icon Size={"1rem"} name={<CiCirclePlus/>}/>
               }>
                 Add user
        </Button>
        </Link>
        <Button icon={<CiUndo/>} onClick={start} loading={loading}>
        Reload
        </Button>
            </div>
            </div>
       
        <Table 
         columns={columnsUser}
          dataSource={data} />
    </div>
}








