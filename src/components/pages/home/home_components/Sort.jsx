import { useContext } from "react";
import { contextCreator } from "../../../context/ContextCreator";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";
import './Sort.css'

export default function Sort() {
  const { sortedMaxToMin, handleSort } = useContext(contextCreator);
  return (
    <div>
      {sortedMaxToMin ? (
        <button className="sort" onClick={handleSort}><BsSortNumericDownAlt className="sort__icon"/></button>
      ) : (
        <button className="sort" onClick={handleSort}><BsSortNumericDown className="sort__icon"/></button>
      )}
    </div>
  );
}