import { useCallback } from "react";
import MemoisedListItem from "./ListItem";

const List = ({ data, selectedItems, toggleItem }) => {
  const handleClick = useCallback((item) => toggleItem(item), [toggleItem]);
  return (
    <ul>
      {data.map((item) => (
        <MemoisedListItem
          key={item.id}
          item={item}
          selected={selectedItems.includes(item)}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default List;
