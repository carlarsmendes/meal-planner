import React from 'react';

// Define types for the props
interface ItemSelectorProps {
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  options: number[];
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ label, value, setValue, options }) => {
  return (
    <div className="flex">
      <label className="block mb-2">{label}: {value}</label>
      {options.map(option => (
        <button
          key={option}
          className="rounded-full text-center bg-orange-300 text-white font-bold py-2 px-4 hover:bg-orange-500 cursor-pointer"
          onClick={() => setValue(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
};

export default ItemSelector;