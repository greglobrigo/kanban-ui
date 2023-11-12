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

    return (
        <div className="h-16 fixed top-0 bg-gradient-to-r from-purple-400
        to-blue-500 w-full flex items-center justify-between pr-[12rem]">
            <div className="flex px-5 items-center">
                <SearchIcon className="w-5 h-5 text-white"/>
                <input onChange={(e) => handleEdit(e.target.value)} value={inputValue}
                type="text" placeholder="Search for tasks ..."
                className="bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg pr-[40rem]"/>
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