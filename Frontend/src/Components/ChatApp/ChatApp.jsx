
import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, user: 'Guest' }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Community Chat</h1>
      <div style={{height: '70vh', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Type your message..."
        style={{width:'90%', marginRight: '10px' }}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatApp;
