## Task Implementation

To check : Goto  src -> App.jsx
Deployed Link :  https://peppy-biscuit-f4cdd1.netlify.app/

### Video Link



https://github.com/dishant-08/zeptoassignment/assets/60565337/4a7573c2-f6d8-4c71-a3c5-1e6d4b7bd5e2




### Bonus Task

Highlight Last Chip on Backspace
When the input is blank and the user presses backspace, the last chip gets highlighted.

``` jsx

// Code snippet to handle backspace press
const handleBackspacePress = (e) => {
  if (e.key === "Backspace" && input === "" && chips.length > 0) {
    setHighlightedChip(chips[chips.length - 1]);
  }
  if (e.key === "Backspace" && input === "" && highlightedChip) {
    handleChipRemove(highlightedChip);
    setHighlightedChip(null);
  }
};

// In the useEffect hook
useEffect(() => {
  document.addEventListener("keydown", handleBackspacePress);
  return () => {
    document.removeEventListener("keydown", handleBackspacePress);
  };
}, [chips, input, highlightedChip]);


```
### ScreenShots

![image](https://github.com/dishant-08/zeptoassignment/assets/60565337/b94ffcff-50e1-43d2-876c-8811412dc471)


![image](https://github.com/dishant-08/zeptoassignment/assets/60565337/822dcc32-87f4-4077-b6e9-63dc9618fdc1)





### Specifications

#### 1. Display List on Input Click

When you click on the input field, a list of items appears.

```jsx
// Code snippet to handle input click
// Code snippet to handle input click
const toggleListVisibility = () => {
  setShowList(!showList);
};

// In the render section
<input
  type="text"
  value={input}
  placeholder="Add new User"
  onChange={handleInputChange}
  onClick={toggleListVisibility}
  className="focus:outline-none p-2"
/>


```

#### 2. Dynamic Filtering
As you type, the list dynamically shows only items that match what you're typing.
// Code snippet to filter items based on user input
``` jsx
  {showList && (
          <div>
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
                  className="p-2 cursor-pointer flex"
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
```
 #### 3. Item to Chip Conversion
Clicking on an item turns it into a chip at the top, and the input field adjusts automatically.

``` jsx
// Code snippet to handle item click
const handleItemClick = (item) => {
  setChips([...chips, item]);
  setInput("");
  setShowList(false);
};
```
#### 4. Remove Chip and Add Back to List
Each chip has an "X" icon. Clicking it removes the chip and adds the item back to the list.

``` jsx
// Code snippet to handle chip removal
const handleChipRemove = (chip) => {
  setChips(chips.filter((c) => c !== chip));
  setInput("");
};
```

### Clean Code
The code follows best practices and is organized for clarity and maintainability. Functions are modularized, and meaningful variable names are used throughout the codebase.





