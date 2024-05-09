import { useContext } from "react";
import { contextCreator } from "../../../context/ContextCreator";
import { MdPriceChange } from "react-icons/md";
import './FilterMaxPrice.css'

export default function FilterMaxPrice() {
  const { maxPrice, handleMaxPrice } = useContext(contextCreator);
  return (
    <div className="filter">
      <MdPriceChange className="filter--icon"/>
      <label className="filter--price">${maxPrice}<input type="range" className="price--input" id="maxPrice" min={0} max={1000} step={10} defaultValue={1000} onChange={(event) => handleMaxPrice(Number(event.target.value))} /></label>
    </div>
  );
}