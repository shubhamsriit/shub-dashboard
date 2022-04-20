import React from 'react';
import SideNavList from './sidenav-list';
import logo from '../../assest/biblio.jpeg';

function Sidenav() {
  return (
    <div className='sidenav-style'>
        <div className='sidenav-header padding-left-10 font-size-16 font-weight-500'>
            <div className='padding-top-10 display-flex' >
                <img src={logo} className='logo-style margin-top-10'/>
                <p className='padding-left-10 padding-top-10'>Biblio</p>
            </div>
        </div>
         <SideNavList />
    </div>
  );
}

export default Sidenav;