import { useState, useCallback } from "react";
import List from "./List";
import { data } from "./DATA";
import "./styles.css";

const App = () => {
  // An array containing the selected items
  const [selected, setSelected] = useState([]);

  const toggleItem = useCallback(
    (item) =>
      setSelected((prevSelected) =>
        !prevSelected.includes(item)
          ? [...prevSelected, item]
          : prevSelected.filter((current) => current !== item)
      ),
    []
  );

  return (
    <div className="App">
      <h1>List Example</h1>
      <List data={data} selectedItems={selected} toggleItem={toggleItem} />
    </div>
  );
};

export default App;
