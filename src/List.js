import ListItem from "./ListItem";

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

export default List;
