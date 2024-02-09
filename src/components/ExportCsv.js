import React from 'react';
import { CSVLink } from 'react-csv';
import Icon from './Icon';
import {CiExport} from "react-icons/ci"
const ExportToCSVButton = ({ data, filename }) => {
  return (
   <CSVLink className='p-2 inline-flex items-center gap-2 text-variation-500 
   font-semibold hover:underline' filename={filename} data={data}>
    <Icon Size={"1rem"} name={<CiExport/>}/> 
    <p>export report to excel file</p> 
   </CSVLink>
  );
};

export default ExportToCSVButton
