import React, { useState } from 'react';
import ListItem from './Components/ListItem';

const arrayItem = [
  {
    id: 1,
    place: 'Bangalore',
    checked: false,
  },
  {
    id: 2,
    place: 'Hyderabad',
    checked: false,
  },
  {
    id: 3,
    place: 'Pune',
    checked: false,
  },
  {
    id: 4,
    place: 'Chennai',
    checked: false,
  },
];

function App() {
  const [arr, setArray] = useState(arrayItem);

  const handleCheckboxChange = (id) => {
    const updatedArray = arr.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setArray(updatedArray);
  };

  const handleItemClick = (id) => {
    const itemToUpdate = arr.find((item) => item.id === id);
    if (itemToUpdate.checked) {
      const updatedArray = arr.filter((item) => item.id !== id);
      setArray(updatedArray);
    }
  };

  return (
    <div className="App">
      <ListItem
        array={arr}
        onCheckboxChange={handleCheckboxChange}
        onItemClick={handleItemClick}
      />
    </div>
  );
}

export default App;
