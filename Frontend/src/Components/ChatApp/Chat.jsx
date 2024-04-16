import React from 'react'
import Messages from './Messages';

const Chat = () => {
    return (
        <div className="">
            <div className="flex">
                <div className="flex-grow  h-screen p-2 rounded-md">
                        <Messages/>
                </div>
            </div>
        </div>
    )
}

export default Chat