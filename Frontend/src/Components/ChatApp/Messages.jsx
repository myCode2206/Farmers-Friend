import React, { useState, useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';
import Usertext from './Usertext';
import Mytext from "./Mytext"

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // console.log(messages)

    const socket = useMemo(
        () =>
            io('http://localhost:3000', {
                withCredentials: true,
            }),
        []
    );

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected', socket.id);
        });

        socket.on('recived-msg', (data) => {
            setMessages((messages) => [...messages, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
        socket.emit('send-msg',{ user: socket.id() ,text: newMessage});
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { user: socket.id , text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div className="flex-grow h-full flex flex-col">
            <div className="w-full h-15 p-1 bg-purple-600 dark:bg-gray-800 shadow-md rounded-xl rounded-bl-none rounded-br-none">
                <div className="flex p-2 align-middle items-center">
                    <div className="p-2 md:hidden rounded-full mr-1 hover:bg-purple-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                    <div className="flex-grow p-2">
                        <div className="text-3xl text-gray-50 font-semibold">Farmers Community</div>
                    </div>
                    <div className="p-2 text-white cursor-pointer hover:bg-purple-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full flex-grow bg-grey-400 dark:bg-gray-900 my-2 p-2 overflow-y-auto">
                {messages.map((msg, index) => (
                    <>

                    
                    {/* <Mytext key={index} text={msg.text} user={msg.user}  ></Mytext> */}
                    <Usertext key={index} text={msg.text} user={msg.user} />
                    </>
                    
                ))}
                <Mytext></Mytext>
            </div>
            <div className="h-15  p-3 rounded-xl rounded-tr-none rounded-tl-none bg-gray-100 dark:bg-gray-800">
                <div className="flex items-center">
                    <div className="p-2 text-gray-600 dark:text-gray-200 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="search-chat flex flex-grow p-2">
                        <input
                            onChange={handleNewMessageChange}
                            value={newMessage}
                            className="h-5 input text-gray-700 dark:text-gray-200 text-sm p-2 focus:outline-none bg-gray-100 dark:bg-gray-800 flex-grow rounded-l-md"
                            type="text"
                            placeholder="Type your message ..."
                        />
                        <button onClick={handleSendMessage} className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
