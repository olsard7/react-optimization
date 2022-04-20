import { useState } from "react";

// Create mock data with elements containing increasing items
const data = new Array(100)
  .fill()
  .map((_, i) => i + 1)
  .map((n) => ({
    id: n,
    name: `Item ${n}`,
  }));

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

const List = ({ data, selectedItems, toggleItem }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          selected={selectedItems.includes(item)}
          onClick={() => toggleItem(item)}
        />
      ))}
    </ul>
  );
};

const ListItem = ({ name, selected, onClick }) => {
  // Run an expensive operation to simulate a load
  // In real-world JS applications, this could be either a custom
  // JS elaboration or a complex render.
  expensiveOperation(selected);

  return (
    <li
      style={selected ? { textDecoration: "line-through" } : undefined}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

// This is an example of an expensive JS operation that we might
// execute in the render function to simulate a load.
// In real-world applications, this operation could be either a custom
// JS elaboration or just a complex render
const expensiveOperation = (selected) => {
  // Here we use selected just because we want to simulate
  // an operation that depends on the props
  let total = selected ? 1 : 0;
  for (let i = 0; i < 200000; i++) {
    total += Math.random();
  }
  return total;
};

export default App;
