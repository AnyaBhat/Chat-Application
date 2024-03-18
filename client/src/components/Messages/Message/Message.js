import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';
const Message = ({message:{user,text,showTime},name}) => {
    let isSentByCurrentUser=false;

    const trimmedName=name.trim().toLowerCase();

    if(user===trimmedName){
        isSentByCurrentUser=true;
    }
    
return (
    isSentByCurrentUser ?(
        <div className="messageContainer justifyEnd">
            <div className="messageBox backgroundBlue">
            <div>
                <p className="sentText sentText1 pr-10 flex" >
                    <span className="flex-start">
                        {trimmedName}
                    </span>
                    <span className='pl-30 flex-end'>
                        {showTime} 
                    </span>
                </p>
            </div>
                <p className="messageText colorWhite pl-60">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
        </div>
    ):(
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <div>
                <p className="sentText sentText2 pl-10">
                    <span className="flex-start">
                        {user}
                    </span>
                    <span className='pl-30 flex-end'>
                        {showTime} 
                    </span>
                </p>
                
                </div>
                <p className="messageText colorDark">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
        </div>
    )
    )
}

export default Message
