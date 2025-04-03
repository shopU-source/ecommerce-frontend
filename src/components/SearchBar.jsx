import { Button } from "@mui/material";
import "./searchBar.css";
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#f6f6f6] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="search for products"
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[35px] h-[35px] !rounded-full !text-[#287c2c]">
        <IoIosSearch className="text-[#287c2c] text-[22px]" />
      </Button>
    </div>
  );
}

export default Search;
