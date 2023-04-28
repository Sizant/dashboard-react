import React from 'react'
import './Sidebar.scss'
import SpeedIcon from '@mui/icons-material/Speed';
import LanguageIcon from '@mui/icons-material/Language';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GridViewIcon from '@mui/icons-material/GridView';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';
import InboxIcon from '@mui/icons-material/Inbox';
import FolderIcon from '@mui/icons-material/Folder';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Artemis</span>
                </div>
                <hr />
            <div className="center">
                <ul>
                    <p className='title'>Main</p>
                    <li className='highlited'>
                       <SpeedIcon className='icon'/>
                        <span style={{color:"white"}} >Dashboard</span>
                    </li>
                 
                    <li>
                        <LanguageIcon className='icon'/>
                        <span>Discover <span className='counter'>4</span></span>
                    </li>
                    <li>
                        <PermContactCalendarIcon className='icon'/>
                        <span>User</span>
                    </li>
                    <li>
                        <AutoStoriesIcon className='icon'/>
                        <span>Documents</span>
                    </li>
                    <li>
                        <GridViewIcon className='icon'/>
                        <span>Application</span>
                    </li>
                    <li>
                        <DescriptionIcon className='icon'/>
                        <span>Pages</span>
                    </li>    
                    <p className='title'>Secondary</p>
                    <li>
                        <HelpIcon className='icon'/>
                        <span>Support Center</span>
                    </li>  
                    <li>
                        <InboxIcon className='icon'/>
                        <span>Inbox</span>
                    </li>  
                    <li>
                        <FolderIcon className='icon'/>
                        <span>File Manager</span>
                    </li>  
                    <li>
                        <FormatListBulletedIcon className='icon'/>
                        <span>Data List</span>
                    </li>     

                    <br/>
                    <br/>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar