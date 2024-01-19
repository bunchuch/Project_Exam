import {useState ,useEffect} from "react"
import {Table, Tag, message,} from "antd"
import {useParams , Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import { getGroupReport } from "../../../api/report"
import { loadingAction } from "../../../redux/loaderSlice"
import ExportToCSVButton from "../../../components/ExportCsv"

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
            item.status = 'PASS'
        }
    })

    return data
}


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
        if(columns.dataIndex == 'name'){
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
                <Tag color={text == "PASS" ? "green" : "red"}>{text}</Tag>
            }
        }else if (columns.dataIndex === 'grade'){
                return {
                    ...columns,
                    render : (text ,record)=> <p
                        className={`
                        ${text == 'A' && 'text-[#16a34a]'}
                        ${text === "B" && 'text-[#0284c7]'}
                        ${text === 'C' && 'text-[#86198f]'}
                        ${text === 'D' && 'text-[#f97316]'}
                        ${text === 'E' && 'text-[#fde047]'}
                        ${text === 'F' && 'text-[#be123c]'}
                        font-semibold` }
                    >
                    {text}
                    </p>
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
     <ExportToCSVButton filename={"studentReport"} data={rearrangedData}/>
        </p>
    </div>
   <Table

   bordered className="mt-3"  
   columns={datacolumns} dataSource={rearrangedData}></Table>
    </>

}