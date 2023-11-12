import React from "react";
import Image from "next/dist/client/image";
import { useState } from "react";
import {
  ChevronDownIcon,
  PlusIcon,
  DotsVerticalIcon,
  ChatAlt2Icon,
  PaperClipIcon,
  PencilIcon
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";

function CardItem({ data, index, boardData, setBoardData, name }) {

  const [willEdit, setWillEdit] = useState(false);
  const [inputValue, setInputValue] = useState(data.title);

  const handleEdit = (e) => {
    setInputValue(e.target.value);
    let newBoardData = boardData.map((board) => {
      if (board.name === name) {
        let newItems = board.items.map((item) => {
          if (item.id === data.id) {
            item.title = e.target.value;
          }
          return item;
        });
        board.items = newItems;
      }
      return board;
    });
    setBoardData(newBoardData);
  }

  const changePriority = () => {
    let newBoardData = boardData.map((board) => {
      if (board.name === name) {
        let newItems = board.items.map((item) => {
          if (item.id === data.id) {
            let newPriority = item.priority + 1;
            if (newPriority > 2) newPriority = 0;
            item.priority = newPriority;
          }
          return item;
        });
        board.items = newItems;
      }
      return board;
    });
    setBoardData(newBoardData);
  }


  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0"
        >
          <div className=" w-full flex justify-between items-center">
            <label onClick={() => changePriority()}
              className={`bg-gradient-to-r px-2 py-1 rounded text-white text-sm cursor-pointer
              ${data.priority === 0
                  ? "from-blue-600 to-blue-400"
                  : data.priority === 1
                    ? "from-green-600 to-green-400"
                    : "from-red-600 to-red-400"
                }
              `}
            >
              {data.priority === 0
                ? "Low Priority"
                : data.priority === 1
                  ? "Medium Priority"
                  : "High Priority"}
            </label>
            <PencilIcon onClick={() => setWillEdit(!willEdit)} className="w-4 h-5 cursor-pointer hover:bg-gray-100 rounded-full" />
          </div>
          {!willEdit && <h5 className="text-md my-3 text-lg leading-6">{inputValue}</h5>}
          {willEdit && <input onChange={(e) => handleEdit(e)} onKeyPress={(e) => {e.key === 'Enter' && setWillEdit(!willEdit)}}
            type="text" className="w-full border border-gray-300 rounded-md my-2" value={inputValue} />}
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <span className="flex space-x-1 items-center">
                <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                <span>{data.chat}</span>
              </span>
              <span className="flex space-x-1 items-center">
                <PaperClipIcon className="w-4 h-4 text-gray-500" />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className="flex space-x-3">
              {data.assignees.map((ass, index) => {
                return (
                  <li key={index}>
                    <Image
                      src={ass.avt}
                      width="36"
                      height="36"
                      objectFit="cover"
                      className=" rounded-full "
                    />
                  </li>
                );
              })}
              <li>
                <button
                  className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full"
                >
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>

      )}
    </Draggable>
  );
}

export default CardItem;