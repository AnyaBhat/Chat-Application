import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import './Chat.css';
//import TextContainer from '../TextContainer/TextContainer';
import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';

let socket;

const Chat = () => {
    const location = useLocation();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000'; // Update with your server URL
    
    const fetchMessages=async()=>{
        fetch(`${ENDPOINT}/messages/${room}`)
                .then(response => response.json())
                .then(data => {
                    setMessages(data);
                })
        .catch(error => console.error('Error fetching messages:', error));
    }

    useEffect(()=>{
        fetchMessages();
    }) //no dependency as the messages need to be updated continuously 

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {});

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location]);


    // useEffect(() => {
    //     // Fetch messages from the server when component mounts
    //     fetch(`${ENDPOINT}/messages/${room}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setMessages(data);
    //             console.log(data)
    //         })
    //         .catch(error => console.error('Error fetching messages:', error));
    // }, [ENDPOINT,room]);

    useEffect(() => {
        socket.on('message', (message) => {
            console.log('message', message);
            console.log('room', message.room);
            console.log('Created At', message.showTime);
            // Ensure the message object includes a room property
            if(message)
                setMessages([...messages, message]);
        });
    }, [messages,room]);

    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            {/* <TextContainer /> */}
        </div>
    );
}

export default Chat;