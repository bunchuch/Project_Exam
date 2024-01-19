import React from 'react';
import { CSVLink } from 'react-csv';
const ExportToCSVButton = ({ data, filename }) => {
  return (
   <CSVLink className='p-2 text-variation-500 font-semibold hover:underline' filename={filename} data={data}>
    export to csv
   </CSVLink>
  );
};

export default ExportToCSVButton
