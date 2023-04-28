import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
            <SearchIcon/>
                <input type='text' placeholder='Type to search...' />
            </div>

            <div className="items">
                <div className="item">
                    <SettingsIcon className='icon'/>
                </div>
                <div className="item">
                    <ModeCommentOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneIcon className='icon'/>
                </div> 
                 <div className="">
                    <p>Thomas Brown </p>
                    <p className='dev'>Developer</p>
                </div> 
                <div className="item">
                    <img
                    src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='' 
                    className='avatar'/>
                </div> 
                  
            </div>
        </div>
    </div>
  )
}

export default Navbar