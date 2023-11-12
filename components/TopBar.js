import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import { useState } from 'react';

function TopBar({setBoardData, boardData}) {

    const [inputValue, setInputValue] = useState('');

    const handleEdit = (string) => {
        setInputValue(string);
            setBoardData(boardData.filter((board) => {
                let newItems = board.items.filter((item) => {
                    return item.title.toLowerCase().includes(string.toLowerCase());
                });
                board.items = newItems;
                return board;
            }));
    }

    const handleResetData = () => {
        const OriginalData = [
            {
                "name":"Backlog",
                "items": [
                    {
                        "id":1,
                        "priority": 0,
                        "title": "Company website redesign.",
                        "chat": 1,
                        "attachment": 2,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/75.jpg"
                            }
                        ]
                    },
                    {
                        "id":2,
                        "priority": 2,
                        "title": "Mobile app login process prototype.",
                        "chat": 10,
                        "attachment": 4,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/67.jpg"
                            }
                        ]
                    },
                    {
                        "id":9,
                        "priority": 2,
                        "title": "Refactoring of APIS.",
                        "chat": 10,
                        "attachment": 4,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/54.jpg"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"In Progress",
                "items": [
                    {
                        "id":3,
                        "priority": 1,
                        "title": "Research and strategy for upcoming project.",
                        "chat": 0,
                        "attachment": 3,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/79.jpg"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"In Review",
                "items": [
                    {
                        "id":4,
                        "priority": 2,
                        "title": "Dashboard layout redesign.",
                        "chat": 13,
                        "attachment": 2,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/75.jpg"
                            }
                        ]
                    },
                    {
                        "id":5,
                        "priority": 0,
                        "title": "Social media posts",
                        "chat": 0,
                        "attachment": 0,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/68.jpg"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"Completed",
                "items": [
                    {
                        "id":6,
                        "priority": 0,
                        "title": "Review client spec document and give feedback.",
                        "chat": 13,
                        "attachment": 2,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/75.jpg"
                            }
                        ]
                    },
                    {
                        "id":7,
                        "priority": 1,
                        "title": "Navigation designs",
                        "chat": 0,
                        "attachment": 0,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/68.jpg"
                            }
                        ]
                    },
                    {
                        "id":8,
                        "priority": 2,
                        "title": "Create style guide based on previous feedback",
                        "chat": 5,
                        "attachment": 2,
                        "assignees": [
                            {
                                "avt": "https://randomuser.me/api/portraits/men/64.jpg"
                            }
                        ]
                    }
                ]
            }
        ];
        setInputValue('');
        setBoardData(OriginalData);
    }

    return (
        <div className="h-16 fixed top-0 bg-gradient-to-r from-purple-400
        to-blue-500 w-full flex items-center justify-between pr-[12rem]">
            <div className="flex px-5 items-center justify-between">
                <SearchIcon className="w-5 h-5 text-white"/>
                <input onChange={(e) => handleEdit(e.target.value)} value={inputValue}
                type="text" placeholder="Search for tasks ..."
                className="bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg pr-[40rem]"/>
                <button onClick={handleResetData} className="text-white text-lg font-bold bg-red-600 rounded-sm px-4 py-2">Reset</button>
            </div>
            <div className="flex space-x-6 items-center">
                <AtSymbolIcon className="w-7 h-7 text-white"/>
                <BellIcon className="w-7 h-7 text-white"/>
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3">M. John Doe</h3>
                    <Image src="https://randomuser.me/api/portraits/men/75.jpg"
                        width="36" height="36" objectFit="cover"
                        className=" rounded-full "/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;