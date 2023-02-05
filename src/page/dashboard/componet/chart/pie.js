import { Pie } from "react-chartjs-2";




export const Pie =() => {
    return <>
       < Doughnut  options={options}
  datasetIdKey='id'
  data={{
    labels: [2022,2023],
    datasets: [
    
      {
        id: 1,
        label: 'Mothly Sale',
        data: [1000],
      },
      {
        id: 2,
        label: 'Mothly Sale',
        data: [2000],
      },
      {

      }
     
    ],
  }  
  }
/>
    
    </>
}