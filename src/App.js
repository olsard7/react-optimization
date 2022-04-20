import { useState } from "react";
import List from "./List";
import { data } from "./DATA";

const App = () => {
  // An array containing the selected items
  const [selected, setSelected] = useState([]);

  // Select or unselect the given item
  const toggleItem = (item) => {
    if (!selected.includes(item)) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((current) => current !== item));
    }
  };

  return (
    <div className="App">
      <h1>List Example</h1>
      <List data={data} selectedItems={selected} toggleItem={toggleItem} />
    </div>
  );
};

export default App;
