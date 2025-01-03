'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageContainer } from "@/app/chat/component/MessageContainer";
import { TextArea } from "@/app/chat/component/TextArea";
import { Layout } from "@/components/Layout/layout";

export function ChatApp() {
    const [messages, setMessages] = useState([
        { type: 'server', text: 'Hello, how can I assist you today regarding Dhairya Gajjar?' },
    ]);
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef(null);
    const [threadId, setThreadId] = useState(null);

    useEffect(() => {
        const createThreadId = async () => {
            try {
                const response = await fetch('https://dev5.dhairya.io/createThread', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.text();
                setThreadId(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        createThreadId();
    }, []);

    const handleSendMessage = async () => {
        if (userInput.trim() === '' || isSending) return;

        const newMessages = [...messages, { type: 'user', text: userInput }];
        setMessages(newMessages);
        setIsSending(true);


        try {
            const response = await fetch('https://dev5.dhairya.io/getResponse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: userInput,
                    threadId: threadId
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text(); // Parse the response as text
            const lines = data.split('\n')
                .map(line => line.trim())
                .filter(line => line !== '');

            setMessages((prevMessages) => [
                ...prevMessages,
                ...lines.map(line => ({ type: 'server', text: line }))
            ]);
        } catch (error) {
            console.error('Error:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: 'server', text: 'Error: Could not get a response from the server.' },
            ]);
        }


        setIsSending(false);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            await handleSendMessage();
        }
    };

    return (
        <Layout>
            <div className="flex flex-col h-screen">
                <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar h-4/5" style={{ paddingBottom: '5rem' }}>
                    <MessageContainer messages={messages} />
                    <div ref={messagesEndRef} />
                </div>

                <div className="flex items-center justify-center p-4 h-1/5">
                    <div className="fixed bottom-8 w-full max-w-3xl flex items-center justify-center">
                        <div className="flex w-full max-w-3xl rounded-full bg-[#1e2c3f] px-4 py-2 shadow-inner shadow-[#0c0f14]">
                            <TextArea
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isSending}
                            />
                            <button
                                className="ml-4 rounded-full bg-gradient-to-r from-[#1e2533] to-[#0f1a2b] px-4 py-2 text-white shadow-md transition-colors hover:bg-gradient-to-br hover:from-[#071121] hover:to-[#1e2533] focus:outline-none focus:ring-2 focus:ring-[#071121] focus:ring-opacity-50"
                                onClick={handleSendMessage}
                                disabled={isSending}
                            >
                                <SendIcon className="h-4 w-4 transition-transform hover:scale-110 hover:brightness-125" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}
