import React, { useState } from 'react';
import logo from '../../assest/biblio.jpeg';
import { useNavigate } from 'react-router-dom';
import { withSnackbar } from "../../UI-Utils/snackbar";



const Login = (props) => {
    const navigate = useNavigate();
    const [Moblie, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const validateInput = () => {
        if (Moblie && password){
            navigate('/layout/user');
        }
        else{
            props.snackbarShowMessage(`Mobile and password Required`);
        }
 
    }


    return (
        <>
        <div className='width-100 flex' >
            <div className='responsive-banner background-aliceblue'>
                <div className='center margin-top-50'>
                    <img src={logo} width="100" style={{borderRadius:10}} /><br />
                    <p className='font-weight-500 font-size-24'>Biblio</p>
                </div>
            </div>
            <div className='responsive-form margin-top-20'>
                <div className='margin-top-20 padding-top-40 layout-responsive'>
                    <span className='font-weight-500 font-size-20'>Login</span>
                    <div className='margin-top-40'>
                        <label>Moblie</label><br />
                        <input className="margin-top-10 input-text"
                            type="text"
                            pattern="[0-9]*"
                            value={Moblie}
                            maxLength="10"
                            onChange={(e) =>
                                setMobile((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                        />

                    </div>
                    <div className='margin-top-20'>
                        <label>Password</label><br />
                        <input type="password" value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="margin-top-10 input-text" />
                    </div>
                    
                </div>
                <div className='button-layout' >
                        <button className='submit-button' onClick={validateInput}>
                            SUBMIT
                        </button>
                    </div>
            </div>
        </div>

     </>
        
    );
}

export default withSnackbar(Login);