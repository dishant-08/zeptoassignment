import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import alogo from "./assets/alogo.png";
import nlogo from "./assets/nlogo.png";
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
      email: "nickGiannopoulos@gmail.com",
      image: nlogo,
    },
    {
      id: 3,
      chip: "Anita Gros",
      email: "anitaGros@gmail.com",
      image: alogo,
    },
    {
      id: 4,
      chip: "Megan Smith",
      email: "megansmith@gmail.com",
      image: mehalogo,
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

  const toggleList = () => {
    setShowList(!showList);
  };

  console.log(highlightedChip);

  useEffect(() => {
    document.addEventListener("keydown", handleBackspacePress);
    return () => {
      document.removeEventListener("keydown", handleBackspacePress);
    };
  }, [chips, input, highlightedChip]);

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap">
          {chips.map((chip) => (
            <div
              key={chip.id}
              className={`m-1 p-2 rounded flex items-center ${
                highlightedChip === chip ? "bg-yellow-500" : "bg-gray-200"
              }`}
            >
              <img
                src={chip.image}
                alt={chip.chip}
                className="w-8 h-8 mr-2 rounded-full"
              />
              <div>{chip.chip}</div>
              <button onClick={() => handleChipRemove(chip)} className="ml-2">
                X
              </button>
            </div>
          ))}

          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onClick={toggleList}
            className="border-b border-b-blue-500 focus:outline-none w-72 p-2"
          />
        </div>
        {showList && (
          <div>
            {allItems
              .filter((item) => !chips.find((chip) => chip.id === item.id))
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="p-2 cursor-pointer flex "
                >
                  <img
                    src={item.image}
                    alt={item.chip}
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                  {item.chip} - {item.email}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
