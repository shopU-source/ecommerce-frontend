import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./sidebar.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

function SideBar() {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
  const [isOpenAvailableFilter, setIsOpenAvailableFilter] = useState(false);
  const [isOpenQuantityFilter, setIsOpenQuantityFilter] = useState(false);

  return (
    <div className="sidebar">
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop by availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative left-[-13px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Available"
                className="w-full"
                size
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="In stock"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Not Available"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop by categories
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenAvailableFilter(!isOpenAvailableFilter)}
          >
            {isOpenAvailableFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailableFilter}>
          <div className="scroll px-4 relative left-[-13px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
                size
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop by quantity
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpenQuantityFilter(!isOpenQuantityFilter)}
          >
            {isOpenQuantityFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenQuantityFilter}>
          <div className="scroll px-4 relative left-[-13px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Available"
                className="w-full"
                size
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="In stock"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Not Available"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Label"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Required"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Disabled"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter by Price
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-black">Rs: {100}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            From: <strong className="text-dark">Rs: {5000}</strong>
          </span>
        </div>
      </div>
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter by Price
        </h3>
        <div className="w-full">
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating
            name="size-small"
            defaultValue={false}
            size="small"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
