import React from 'react'
import './widget.scss'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Box, LinearProgress } from '@mui/material';

const Widget = () => {
  return (
    <div className='widget'>
        <div className='left'>
            <span className="title">Total Income</span>
            <span className='center'> $124,563.00</span>
            <span className='percentage'>+6.9%</span>
            <span>
          
              <Box sx={{ width: '100%' }}>
                  <LinearProgress className='bar' color="secondary" variant="determinate" value={60} />
              </Box> </span>
              <span className='text'>Yearly Goal</span>
        </div>
          
            <div className='right' >
            <div className="dot" style={{cursor:"pointer"}}><MoreHorizRoundedIcon/></div>
            
        </div>
        
    </div>
  )
}

export default Widget