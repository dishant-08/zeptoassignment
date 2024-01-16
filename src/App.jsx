import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import alogo from "./assets/alogo.png";
import nlogo from "./assets/nlogo.png";
import dlogo from "./assets/dlogo.png";
import mehalogo from "./assets/mehalogo.png";

function App() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);
  const [showList, setShowList] = useState(false);

  const allItems = [
    {
      id: 1,
      chip: "Marina Augustine",
      email: "marina@gmail.com",
      image: mehalogo,
    },
    {
      id: 2,
      chip: "Nick Giannopoulos",
      email: "nick@gmail.com",
      image: nlogo,
    },
    {
      id: 3,
      chip: "Anita Giannopoulos",
      email: "anita@gmail.com",
      image: alogo,
    },
    {
      id: 4,
      chip: "Megan Smith",
      email: "megansmith@gmail.com",
      image: mehalogo,
    },
    {
      id: 5,
      chip: "Dishant Sahu",
      email: "dishant.sahu@gmail.com",
      image: dlogo,
    },
    {
      id: 6,
      chip: "David Smith",
      email: "david.smith@gmail.com",
      image: dlogo,
    },
  ];
  const [highlightedChip, setHighlightedChip] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setInput("");
    setShowList(false);
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
  };

  const handleBackspacePress = (e) => {
    if (e.key === "Backspace" && input === "" && chips.length > 0) {
      setHighlightedChip(chips[chips.length - 1]);
    }
    if (e.key === "Backspace" && input === "" && highlightedChip) {
      handleChipRemove(highlightedChip);
      setHighlightedChip(null);
    }
  };

  const toggleListVisibility = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleBackspacePress);
    return () => {
      document.removeEventListener("keydown", handleBackspacePress);
    };
  }, [chips, input, highlightedChip]);

  return (
    <>
      <header className="text-blue-500 font-bold text-center flex items-center justify-center text-5xl mt-20 ">
        Pick Users
      </header>
      <div className="  h-screen flex justify-center items-center   ">
        <div className=" border-b-2 border-blue-600 w-1/2 ">
          <div className="flex flex-col  ">
            <div className="flex flex-wrap  ">
              {chips.map((chip) => (
                <div
                  key={chip.id}
                  className={`m-1 p-2 transition ease-in-out duration-200 rounded-full flex items-center ${
                    highlightedChip === chip ? "bg-yellow-500" : "bg-gray-200"
                  }`}
                >
                  <img
                    src={chip.image}
                    alt={chip.chip}
                    className="w-8 h-8 mr-2  rounded-full"
                  />
                  <div className="font-semibold">{chip.chip}</div>
                  <button
                    onClick={() => handleChipRemove(chip)}
                    className="ml-2"
                  >
                    X
                  </button>
                </div>
              ))}

              <div className="relative items-center justify-center ">
                <input
                  type="text"
                  value={input}
                  placeholder="Add new User"
                  onChange={handleInputChange}
                  onClick={toggleListVisibility}
                  className="focus:outline-none  py-4 pl-2 "
                />
                {showList && (
                  <div className="absolute top-full left-0 w-80 max-h-32 overflow-y-auto overflow-x-hidden scrollbar bg-white border-black rounded-xl shadow-xl mt-1">
                    {allItems
                      .filter(
                        (item) =>
                          !chips.find((chip) => chip.id === item.id) &&
                          item.chip.toLowerCase().includes(input.toLowerCase())
                      )
                      .map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleItemClick(item)}
                          className="p-2 cursor-pointer transition ease-in-out duration-200 hover:bg-slate-200 flex"
                        >
                          <img
                            src={item.image}
                            alt={item.chip}
                            className="w-8 h-8 mr-2 rounded-full"
                          />
                          <span className="font-semibold">{item.chip}</span> -{" "}
                          <span className="text-gray-800">{item.email}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
