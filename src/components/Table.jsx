import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import './table.scss'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';




const Table = () => {

    const data=[
        {id:'M063592DR2',date:"08.04.2021",desc:"CODE 5928MD01",status:"COMPLETED",descs:"$2500.00"},{id:'M063592DR2',date:"08.04.2021",desc:"CODE 5928MD01",status:"COMPLETED",descs:"$2500.00"},
        {id:'M063592DR2',date:"08.04.2021",desc:"CODE 5928MD01",status:"COMPLETED",descs:"$2500.00"},{id:'M063592DR2',date:"08.04.2021",desc:"CODE 5928MD01",status:"COMPLETED",descs:"$2500.00"},
        {id:'M063592DR2',date:"08.04.2021",desc:"CODE 5928MD01",status:"COMPLETED",descs:"$2500.00"},{id:'M063592DR2',date:"08.04.2021",desc:"CODE 5928MD01",status:"COMPLETED",descs:"$2500.00"}
       
    
    ]


        const columns=[
    {headerName:"Invoice ID",field:'id',checkboxSelection:true},
    {headerName:"Date",field:'date'},
    {headerName:"Description",field:'desc'},
    {headerName:"Status",field:'status',cellRendererFramework:(params)=><div>
        <button className='btn'>Completed</button>
    </div>},
    {headerName:"Descriptions",field:'descs'}
]


const ColDef={
    sortable:true,filter:true
}

let gridApi;

const onReady=(params)=>{
    gridApi=params.api
}

const onExportClick=()=>{
    gridApi.exportDataAsCsv();
}


  return (
   
    
    <div className="taal">
         
        <span className='contain'>Recent Transactions <button className='butt' onClick={()=>onExportClick()}><FileUploadOutlinedIcon/> Exports </button></span>
        
    <div className='ag-theme-alpine' style={{
        height:'305px',
        paddingLeft:"6em",
        marginLeft:"70px",
        marginBottom:"100px",
        width:'1100px'}}>
            <AgGridReact rowData={data} columnDefs={columns} defaultColDef={ColDef} onGridReady={onReady} /></div>
            </div>
  )
}

export default Table