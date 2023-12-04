import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Activity() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleMessageChange = (content) => {
    setText(content);
  };

  const sendMessage = () => {
    if (text.trim() !== '') {
      setMessages([...messages, text]);
      setText('');
    }
  };

  return (
    <div>
      <div className='' style={{
        width: "auto",
        height: "300px",
        border: "1px solid #dadad7",
        boxShadow: "0px 0px 4px rgba(164, 164, 164, 0.56)",
        borderRadius: "10px 10px 0 0"
      }}>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message}</p>
          </div>
        ))}
      </div>
     
      
      <div className="position-relative" style={{
        border: "1px solid #dadad7",
        boxShadow: "0px 0px 4px rgba(164, 164, 164, 0.56)",
      }}>
      <ReactQuill value={text} onChange={handleMessageChange} />
          <button
            className="btn btn-bg-light text-white position-absolute"
            style={{
              background: "#55619C",
              top: "57%",
              right: "2%",
              width: "44px",
              height: "44px",
            }}
            onClick={sendMessage}
          >
            <AiOutlineSend />
          </button>
        </div>

    </div>
  );
}

export default Activity;