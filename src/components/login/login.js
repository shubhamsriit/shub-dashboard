import React from 'react';
import logo from '../../assest/biblio.jpeg';


function Login() {
  return (
    <div className='width-100 flex' >
       <div className='responsive-banner background-aliceblue'>
           <div className='center margin-top-50'>
               <img src={logo} width="100"/><br/>
               <p className='font-weight-500 font-size-24'>Biblio</p>
           </div>
       </div>
       <div className='responsive-form margin-top-20'>
       <div className='margin-top-20 padding-top-20 layout-responsive'>
                <span className='font-weight-500 font-size-20'>Login</span>
                <div className='margin-top-20'>
                    <label>Moblie</label><br/>
                    <input type="number" className="margin-top-10 input-text" />
                </div>
                <div className='margin-top-20'>
                    <label>Password</label><br/>
                    <input type="text" className="margin-top-10 input-text" />
                </div>
                <div className='margin-top-40'>
                    <button className='submit-button'>
                        SUBMIT
                    </button>
                </div>
            </div>
       </div>
    </div>
  );
}

export default Login;