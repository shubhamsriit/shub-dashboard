
import React, { useState, useEffect } from 'react';
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import { SiChatbot } from "react-icons/si";


const Chatbot = () => {

    const [chatbot, updateChatbot] = useState(false);
    const [messagePool, setMessage] = useState([]);
    const [enteredMessage, updateMessage] = useState('');

    const buttonHandler = () => {
        updateChatbot(current => !current)
    }

    const updateMessagePool = () => {
        setMessage([...messagePool, enteredMessage]);
        updateMessage('');
    }

    useEffect(() => {
    }, [chatbot, enteredMessage, messagePool]);

    return (
        <div className='width-100 flex'  >
            {chatbot &&
                <div className='chatbot'>
                    <div className='border-line chabot-header'>
                        <div style={{ textAlign: 'left', width: '50%', padding: '10px' }}><b>Biblio</b></div>
                        <div style={{ textAlign: 'end', width: '50%', padding: '10px' }} onClick={buttonHandler}><AiOutlineCloseSquare /></div>
                    </div>
                    {messagePool.length > 0 &&
                        <div style={{overflowY:'scroll',height: '80%'}}>
                            {messagePool.map((user) => (
                                <div className='message-pool'>
                                    {user}
                                </div>
                            ))}
                        </div>
                    }

                    <div className='layout'>
                        <input type="text" className='text-style' value={enteredMessage} placeholder='Write Something'
                            onChange={(e) =>
                                updateMessage(e.target.value)
                            } />
                        <button type='button' className='btn' onClick={updateMessagePool}><BsFillCursorFill className='send-icon' /></button>
                    </div>
                </div>
            }
            {!chatbot &&
                <div style={{ position: 'fixed', bottom: '100px', right: '30px' }}>
                    <div onClick={buttonHandler} style={{ borderRadius: '50%', backgroundColor: 'white', boxShadow: '0px 2px 6px #EFEFEF', padding: '10px' }}>
                        <SiChatbot className='send-icon' />
                    </div>
                </div>

            }
        </div>
    );
}

export default Chatbot;