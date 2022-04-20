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

export default ListItem;
