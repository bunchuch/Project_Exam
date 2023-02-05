import { Line } from "react-chartjs-2";



export const Lines = ()=>{
    return <>
           <Line
  datasetIdKey='id'
  data={{
    labels: ["Jan","Feb",'Jun','Mar','Apr',"May" ,"Jun",'Jul', 'Aug',"Sep","Oct","Nov","Dec"],
    datasets: [
    
    
      {
        id: 2,
        label: 'Mothly Sale',
        data: [400, 300, 250,250,500,10,300],
      },
      {
        type: 'scatter',
        data:[100,300,400,300,400],
        showLine:true
      }
    ],
  }}
/>
    
    </>
}