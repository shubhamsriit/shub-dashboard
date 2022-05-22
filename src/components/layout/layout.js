import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from '../header/header';
import Sidenav from '../sidenav/sidenav';
import Photos from './photos';
import UserList from './userlist';
import VideosListingView from './videosListingView';
import Chatbot from '../chatbot';

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
                  <Route path="/photos" element={<Photos />}></Route>                  
                </Routes>
            </div>
          </div>
        </div>
        <div style={{width:'100%'}}>
            <Chatbot/>
        </div>
    </div>
  );
}

export default Layout;