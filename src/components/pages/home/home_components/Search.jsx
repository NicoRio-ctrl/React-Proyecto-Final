import { useContext } from "react"
import { contextCreator } from "../../../context/ContextCreator"
import './Search.css'
import '../../../../App.css'
import { IoIosSearch } from "react-icons/io";

export default function Search(){

    const {query, handleQuery} = useContext(contextCreator)
    return(
        <>
            <form className="search-form">
                <label htmlFor="searchTerm" className="label"><input type="search" className="search" name='' id="searchTerm" placeholder="Search" onChange={(event) => handleQuery(event.target.value)}/><IoIosSearch className="search__icon"/></label>
            </form>
        </>
    )
}