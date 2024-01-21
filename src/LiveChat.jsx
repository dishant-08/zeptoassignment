import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmsg } from "./utils/livechatslice";
import ChatCard from "./ChatCard";

const LiveChat = () => {
  const dis = useDispatch();
  const [input, setInput] = useState("");
  const liveFeed = useSelector((store) => store.livechat.chatmsg);
  console.log(liveFeed);
  useEffect(() => {
    let timer = setInterval(() => {
      dis(
        addmsg({
          name: "random",
          msg: "random msg",
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {/* <main className="flex flex-col"> */}
      <div className=" border-4 border-slate-900 flex flex-col-reverse w-96 h-2/3 overflow-y-scroll  ">
        {liveFeed.map((item, i) => (
          <ChatCard key={i} name={item.name} msg={item.msg}></ChatCard>
        ))}
        <ChatCard name={"fino"} msg={" live message"}></ChatCard>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dis(
            addmsg({
              name: "dishant",
              msg: input,
            })
          );
          setInput("");
        }}
      >
        <input
          type="text"
          className=" border-blue-900 border-b w-80 focus:outline-none  "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className=" ">Send</button>
      </form>
      {/* </main> */}
    </div>
  );
};

export default LiveChat;
