import React from 'react';
import { Link} from 'react-router-dom';

function SideNavList() {
  return (
    <div className='sidenav-menu font-size-16 font-weight-500'>
         <p className='menu-list'>
             <Link className='text-decoration-none' to="/layout/user" >
                 <img className= "" />Users
            </Link>
        </p>
         <p className='menu-list'>
             <Link className='text-decoration-none' to="/layout/video">
                 Videos
            </Link>
        </p>
        <p className='menu-list'>
             <Link className='text-decoration-none' to="/layout/photos">
                 Photos
            </Link>
        </p>
        <p className='menu-list'>
             <Link className='text-decoration-none' to="/login">
                 Logout
            </Link>
        </p>
    </div>
  );
}

export default SideNavList;