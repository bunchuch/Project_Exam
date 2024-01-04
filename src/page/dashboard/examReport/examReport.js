import {useState ,useEffect} from "react"
import {Table, Tag, message,} from "antd"
import {useParams , Link} from "react-router-dom"
import moment from "moment"
import { CSVLink } from "react-csv"
import {useDispatch} from 'react-redux'
import { getGroupReport } from "../../../api/report"
import { loadingAction } from "../../../redux/loaderSlice"
export const ReportExam = () => {
    const [data ,setData] = useState([])
    const {id} = useParams()
    const dispatch = useDispatch()
 
    const GetReport = async () => {

        try {
            dispatch(loadingAction.ShowLoading())
            const response = await getGroupReport({examId : id})
            dispatch(loadingAction.HideLoading())
            if(response.success){
                setData(response.result)
            }else{
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error)
        }
    }
   
    useEffect(()=> {
        GetReport()
    },[])

const sortbyTotal = () => {
    data.sort((a,b)=> b.total - a.total)
    data.forEach((item, index)=>{
        item.number = index + 1
        if(item.total > 45){
            item.status = 'pass'
        }
    })

    return data
}


const csvData = [
    ["No","username", "vocabulary", "reading", "QA",
     'grammar', 'wirting', 'listenning',"total","status"],
    ...data.map(({username ,vocabulary,reading ,qa, grammar, writing, listenning ,total , status ,number} ,key)=>[
      number , 
      username ,
      vocabulary ,
       reading ,
       qa,
       grammar,
        writing ,
        listenning,
        total ,
        status
    ]),
];
    const rearrangedData = sortbyTotal().map(item => {
        const { number, ...rest } = item;
        return { number, ...rest };
      });
    const datacolumns = rearrangedData.length > 0 ?
     Object.keys(rearrangedData[0]).map((key)=>({
      title : key,
      dataIndex : key ,
      key : key,
    })).filter((columns)=> columns.dataIndex !== '_id').map((columns)=> {
        if(columns.dataIndex == 'username'){
            return {
                ...columns,
                render : (text ,record)=><Link
                to= {`/dashboard/student/${record._id}`}
                >
                {text}
                </Link>
            }

        }else if(columns.dataIndex === 'status'){
            return {
                ...columns,
                render : (text ,record)=>
                <Tag color={text == "pass" ? "green" : "red"}>{text}</Tag>
            }
        }else{
            return {
                ...columns
            }
        }
    }) : []
//    console.log(datacolumns)
    return <>
    <div className="flex gap-3 items-center">
    <p className="text-[14px] mt-2 text-gray-300">
     ✨ Click on each id for view result
        </p>
<a><CSVLink className="bg-variation-500 
        text-white rounded-md py-[1px] text-[12px] px-2" 
        filename="studnetRport.csv" data={csvData}>
        Export to CSV
      </CSVLink></a>  
    </div>
   <Table

   bordered className="mt-3"  
   columns={datacolumns} dataSource={rearrangedData}></Table>
    </>

}