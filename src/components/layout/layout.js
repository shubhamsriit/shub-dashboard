import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from '../header/header';
import Sidenav from '../sidenav/sidenav';
import UserList from './userlist';
import VideosListingView from './videosListingView';

function Layout() {
  return (
    <div>
       <div className='display-flex' >
          <div className='width-sidenav'>
            <Sidenav />
          </div>
          <div className='width-responsive'>
            <Header />
            <div className='padding-top-70'>
             
                <Routes>
                  <Route path="/user" element={<UserList />}></Route>
                  <Route path="/video" element={<VideosListingView />}></Route>
                </Routes>
            

            </div>
          </div>
        </div>
    </div>
  );
}

export default Layout;