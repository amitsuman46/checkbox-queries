import React from 'react';

const ListItem = (props) => {
  const { array, onItemClick, onCheckboxChange } = props;

  const handleItemClick = (id) => {
    onItemClick(id);
  };

  const handleCheckboxChange = (id) => {
    onCheckboxChange(id);
  };

  return (
    <ul>
      {array.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(item.id)}
            checked={item.checked || false}
          />
          {item.place}
          <button onClick={() => handleItemClick(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
