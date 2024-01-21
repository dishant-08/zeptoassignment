import React from "react";

const ChatCard = ({ name, msg }) => {
  return (
    <div className=" flex gap-4 ">
      <span className="font-bold ml-2 "> {name} </span>
      <span> {msg} </span>
    </div>
  );
};

export default ChatCard;
